import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenericService } from './generic.service';
import { Router } from '@angular/router';
import { User } from "../models/user";
import { Buffer } from "buffer";

@Injectable({
  providedIn: 'root',
})
export class AuthService extends GenericService<User, number> {
  private _user: User;
  private _token: string;
  private credenciales = Buffer.from('titania-web' + ':' + '12345').toString('base64');
  private params = new URLSearchParams();
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + this.credenciales,
  });

  constructor(protected override http: HttpClient, protected override router: Router) {
    super(http, router, `${environment.api.baseTokenUrl}`);
  }

  /**
   * Login by user and password
   * @param user
   */
  login(user: User): Observable<any> {
    this.params.set('grant_type', 'password');
    this.params.set('username', user.username);
    this.params.set('password', user.password);
    return this.http.post(this.base, this.params.toString(), {
      headers: this.httpHeaders,
    });
  }

  /**
   * Save user and session storage
   * @param accessToken
   */
  saveUser(accessToken: string): void {
    const payload = this.converterToken(accessToken);
    this._user = new User();
    this._user.employee.name = payload.name;
    this._user.employee.lastname = payload.lastname;
    this._user.employee.email = payload.email;
    this._user.username = payload.username;
    this._user.status = payload.status;
    this._user.roles = payload.authorities;
    sessionStorage.setItem('user', JSON.stringify(this._user));
  }

  /**
   * Save token
   * @param accessToken
   */
  saveToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', this._token);
  }

  /**
   * Converter token
   * @param accessToken
   */
  converterToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(Buffer.from(accessToken.split('.')[1], 'base64').toString('ascii'));
    }
    return null;
  }

  /**
   * Get user
   */
  get user(): User {
    if (this._user != null) {
      return this._user;
    } else if (this._user == null && sessionStorage.getItem('user') != null) {
      this._user = JSON.parse(sessionStorage.getItem('user')) as User;
      return this._user;
    }
    return new User();
  }

  /**
   * Get token
   */
  get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }

  /**
   * Is authenticated
   */
  isAuthenticated(): boolean {
    const payload = this.converterToken(this.token);
    return payload != null && payload.user_name && payload.user_name.length > 0;
  }

  /**
   * Log out
   */
  logout(): void {
    this._user = null;
    this._token = null;
    sessionStorage.clear();
  }

  /**
   * Find role
   * @param role
   */
  hasRole(role: string): boolean {
    return this.user.roles.includes(role);
  }
}
