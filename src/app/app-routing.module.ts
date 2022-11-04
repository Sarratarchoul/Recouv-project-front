import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  {
    path: 'login',
   component: LoginComponent,
  },
  {
    path: 'register',
   component: RegisterComponent,
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },   
  {
    path: 'pagess',
    loadChildren: () => import('./pagess/pagess.module')
      .then(m => m.PagessModule),
  },     
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: '**', redirectTo: 'login' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}