import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../guards/auth.guard';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesComponent} from './pages.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {title: 'Dashboard'},
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {title: 'Profile'},
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
