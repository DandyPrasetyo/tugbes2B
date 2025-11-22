import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CareerComponent } from './components/career/career.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'career', component: CareerComponent },
  // tambahkan route lain jika perlu
];