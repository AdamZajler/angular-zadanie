import { Routes } from '@angular/router';
import {LogowanieComponent} from "./logowanie/logowanie.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '',
    component: LogowanieComponent,
    data: { title: 'Strona logowania' },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Kokpit' },
  },
];
