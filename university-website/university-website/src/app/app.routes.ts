import { Routes } from '@angular/router';

/* ===============================
   WEBSITE KAMPUS (HEADER & FOOTER BIASA)
================================ */
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

/* ===============================
   CAREER CENTER (LAYOUT SENDIRI)
================================ */
import { CareerLayoutComponent } from './components/career/layout-career/layout-career.component';
import { CareerComponent } from './components/career/career.component';
import { LowonganComponent } from './components/career/lowongan/lowongan.component';
import { MagangComponent } from './components/career/magang/magang.component';
import { EventComponent } from './components/career/event/event.component';
import { LoginadminComponent } from './components/career/login-admin/login-admin.component';

/* ===============================
   DASHBOARD ADMIN
================================ */
import { DashboardAdminComponent } from './components/career/dashboard-admin/dashboard-admin.component';

/* ===== CRUD Lowongan ===== */
import { ListLowonganComponent } from './components/career/dashboard-admin/crud-lowongan/list-lowongan/list-lowongan.component';
import { FormLowonganComponent } from './components/career/dashboard-admin/crud-lowongan/form-lowongan/form-lowongan.component';

/* ===== CRUD Perusahaan ===== */
import { ListPerusahaanComponent } from './components/career/dashboard-admin/crud-perusahaan/list-perusahaan/list-perusahaan.component';
import { FormPerusahaanComponent } from './components/career/dashboard-admin/crud-perusahaan/form-perusahaan/form-perusahaan.component';

/* ===== CRUD Admin ===== */
import { ListAdminComponent } from './components/career/dashboard-admin/crud-admin/list-admin/list-admin.component';
import { FormAdminComponent } from './components/career/dashboard-admin/crud-admin/form-admin/form-admin.component';

export const routes: Routes = [
  /* ===============================
       WEBSITE KAMPUS
    =============================== */
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },

  /* ===============================
       CAREER CENTER
    =============================== */
  {
    path: 'career',
    component: CareerLayoutComponent,
    children: [
      { path: '', component: CareerComponent },
      { path: 'loker', component: LowonganComponent },
      { path: 'magang', component: MagangComponent },
      { path: 'event', component: EventComponent },
      { path: 'login-admin', component: LoginadminComponent },

      /* ===============================
           DASHBOARD ADMIN
        =============================== */
      { path: 'admin', component: DashboardAdminComponent },

      /* ========== LOWONGAN CRUD ========== */
      { path: 'admin/lowongan', component: ListLowonganComponent },
      { path: 'admin/lowongan/tambah', component: FormLowonganComponent },
      { path: 'admin/lowongan/edit/:id', component: FormLowonganComponent },

      /* ========== PERUSAHAAN CRUD ========== */
      { path: 'admin/perusahaan', component: ListPerusahaanComponent },
      { path: 'admin/perusahaan/tambah', component: FormPerusahaanComponent },
      { path: 'admin/perusahaan/edit/:id', component: FormPerusahaanComponent },

      /* ========== ADMIN CRUD ========== */
      { path: 'admin/admin', component: ListAdminComponent },
      { path: 'admin/admin/tambah', component: FormAdminComponent },
      { path: 'admin/admin/edit/:id', component: FormAdminComponent },
    ],
  },

  /* Redirect jika route tidak ditemukan */
  { path: '**', redirectTo: '' },
];
