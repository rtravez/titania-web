import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menu: any[];

  constructor() {
  }


  ngOnInit(): void {
    this.menu = [
      {
        label: 'File',
        icon: 'pi pi-plus',
        submenu: [
          {label: 'New', icon: 'pi pi-plus', routerLink: ['/pagename'], queryParams: {'recent': 'true'}},
          {label: 'Open', icon: 'pi pi-plus', routerLink: ['/pagename'], queryParams: {'recent': 'true'}},
          {label: 'Recent', icon: 'pi pi-plus', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
        ]
      },
      {
        label: 'test', icon: 'pi pi-download',
        submenu: [
          {label: 'Open', icon: 'pi pi-plus', routerLink: ['/pagename'], queryParams: {'recent': 'true'}},
          {label: 'Recent', icon: 'pi pi-plus', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
        ]
      },
      {
        label: 'test3', icon: 'pi pi-plus',
        submenu: [
          {label: 'Open', icon: 'pi pi-plus', routerLink: ['/pagename'], queryParams: {'recent': 'true'}},
          {label: 'Recent', icon: 'pi pi-plus', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
        ]
      },
      {
        label: 'test4', icon: 'pi pi-plus',
        submenu: [
          {label: 'Open', icon: 'pi pi-plus', routerLink: ['/pagename'], queryParams: {'recent': 'true'}},
          {label: 'Recent', icon: 'pi pi-plus', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
        ]
      },
    ];
  }
}
