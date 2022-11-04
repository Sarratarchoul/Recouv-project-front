import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashComponent } from './dash/dash.component';
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';
import { ListUtilisateurComponent } from './all-utilisateur/all-utilisateur.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { AllFactureComponent } from './all-facture/all-facture.component';
import { AllRelanceComponent } from './all-relance/all-relance.component';
import { AllClientComponent } from './all-client/all-client.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';


const routes: Routes = [
  {
  path: '',
  component: PagesComponent,
  children: [
    
    {
      path: 'dashboard',
      component: DashComponent,
    },
    {
      path: 'login',
     component: LoginComponent,
    },
    {
      path: 'register',
     component: RegisterComponent,
    },
    {
      path: 'add-utilisateur',
      component: AddUtilisateurComponent,
    },
    {
      path: 'all-utilisateur',
      component: ListUtilisateurComponent,
    },
    {
      path: 'add-client',
      component: AddClientComponent,
    },
    {
      path: 'all-client',
      component: AllClientComponent,
    },
    {
      path: 'add-facture',
      component: AddFactureComponent,
    },
    {
      path: 'all-facture',
      component: AllFactureComponent,
    },
    {
      path: 'all-relance',
      component: AllRelanceComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
