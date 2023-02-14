import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth-component/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'admin-dashboard',
    canActivate:[AuthguardGuard],
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
