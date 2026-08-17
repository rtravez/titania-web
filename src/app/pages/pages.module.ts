import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesComponent} from './pages.component';
import {ProfileComponent} from './profile/profile.component';
import {ToastModule} from "primeng/toast";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    ProfileComponent,
    EmployeeComponent,

  ],
  exports: [DashboardComponent, PagesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule, BrowserAnimationsModule, ToastModule,
  ],
})
export class PagesModule {
}
