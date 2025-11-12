//import { Routes } from '@angular/router';

//export const routes: Routes = [];

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CareerComponent }from  './components/career/career.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'career', component: CareerComponent },
  { path: '**', redirectTo: '' }
];
