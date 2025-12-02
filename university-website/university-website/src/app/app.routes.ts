import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CareerComponent } from './components/career/career.component';
import { LowonganComponent } from './components/career/lowongan/lowongan.component';
import { MagangComponent } from './components/career/magang/magang.component';
import { EventComponent } from './components/career/event/event.component';
import { LoginAdminComponent } from './components/career/login-admin/login-admin.component';
import { DashboardAdminComponent } from './components/career/dashboard-admin/dashboard-admin.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'career',
    children: [
      { path: '', component: CareerComponent },
      { path: 'lowongan', component: LowonganComponent },
      { path: 'magang', component: MagangComponent },
      { path: 'event', component: EventComponent },
      { path: 'login', component: LoginAdminComponent },
      { path: 'admin', component: DashboardAdminComponent },
    ],
  },

  { path: 'contact', component: ContactComponent },

  // 404 / Page Not Found (opsional)
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
