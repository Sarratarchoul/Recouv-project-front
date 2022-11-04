import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {DataTablesModule} from 'angular-datatables';
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';
import { ListUtilisateurComponent } from './all-utilisateur/all-utilisateur.component'; 
import { PagesRoutingModule } from './pages-routing.module';
import { ChartModule } from 'angular2-chartjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { NbCardModule } from '@nebular/theme';
import {
  NbActionsModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { NgxEchartsModule } from 'ngx-echarts';
import { AddClientComponent } from './add-client/add-client.component';
import { AllClientComponent } from './all-client/all-client.component';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { AllFactureComponent } from './all-facture/all-facture.component';
import { AddRelanceComponent } from './add-relance/add-relance.component';
import { AllRelanceComponent } from './all-relance/all-relance.component';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { BalanceAgeeChartComponent } from './charts/balance-agee-chart/balance-agee-chart.component';
import { StatusChartComponent } from './charts/status-chart/status-chart.component';
import { EvolutionRetardsChartComponent } from './charts/evolution-retards-chart/evolution-retards-chart.component';
import { FactureClientTableComponent } from './charts/facture-client-table/facture-client-table.component';
import { MiniCardComponent } from './charts/mini-card/mini-card.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MiniCardsComponent } from './charts/mini-cards/mini-cards.component';
import { PrevisionChartComponent } from './charts/prevision-chart/prevision-chart.component';
import { DSOComponent } from './charts/dso/dso.component';
import { RisqueComponent } from './charts/risque/risque.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MiniCardssComponent } from './charts/mini-cardss/mini-cardss.component';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    NgxEchartsModule,
    ChartModule,
    NgxChartsModule,
    ChartsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [
    PagesComponent,
    AddUtilisateurComponent,
    ListUtilisateurComponent,
    AddClientComponent,
    AllClientComponent,
    AddFactureComponent,
    AllFactureComponent,
    AddRelanceComponent,
    AllRelanceComponent,
    DashComponent,
    BalanceAgeeChartComponent,
    StatusChartComponent,
    EvolutionRetardsChartComponent,
    FactureClientTableComponent,
    MiniCardComponent,
    MiniCardsComponent,
    MiniCardssComponent,
    PrevisionChartComponent,
    DSOComponent,
    RisqueComponent,
    NotFoundComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesModule {
}
