import { Routes } from '@angular/router';

/* ===============================
   WEBSITE KAMPUS
================================ */
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

/* ===============================
   BERITA (BARU)
================================ */
import { BeritaListComponent } from './components/berita/berita-list/berita-list.component';
import { BeritaDetailComponent } from './components/berita/berita-detail/berita-detail.component';

/* ===============================
   CAREER CENTER (LAYOUT)
================================ */
import { CareerLayoutComponent } from './components/career/layout-career/layout-career.component';
import { CareerComponent } from './components/career/career.component';
import { LowonganComponent } from './components/career/lowongan/lowongan.component';
import { MagangComponent } from './components/career/magang/magang.component';
import { EventComponent } from './components/career/event/event.component';
import { LoginadminComponent } from './components/career/login-admin/login-admin.component';

/* ===============================
   MITRA
================================ */
import { MitraComponent } from './components/career/mitra/mitra.component';

/* ⭐⭐ TAMBAHAN: halaman detail lowongan (career publik) */
import { LowonganDetailComponent } from './components/career/lowongan/lowongan-detail/lowongan-detail.component';

/* ⭐⭐ TAMBAHAN: halaman detail magang (career publik) */
import { MagangDetailComponent } from './components/career/magang/magang-detail/magang-detail.component';

/* ⭐⭐ TAMBAHAN: halaman detail event (career publik) */
import { EventDetailComponent } from './components/career/event/event-detail/event-detail.component';


/* ===============================
   DASHBOARD ADMIN
================================ */
import { DashboardAdminComponent } from './components/career/dashboard-admin/dashboard-admin.component';

/* CRUD Lowongan */
import { ListLowonganComponent } from './components/career/dashboard-admin/crud-lowongan/list-lowongan/list-lowongan.component';
import { FormLowonganComponent } from './components/career/dashboard-admin/crud-lowongan/form-lowongan/form-lowongan.component';

/* CRUD Perusahaan */
import { ListPerusahaanComponent } from './components/career/dashboard-admin/crud-perusahaan/list-perusahaan/list-perusahaan.component';
import { FormPerusahaanComponent } from './components/career/dashboard-admin/crud-perusahaan/form-perusahaan/form-perusahaan.component';

/* CRUD Admin */
import { ListAdminComponent } from './components/career/dashboard-admin/crud-admin/list-admin/list-admin.component';
import { FormAdminComponent } from './components/career/dashboard-admin/crud-admin/form-admin/form-admin.component';

export const routes: Routes = [
  /* ===============================
       WEBSITE UTAMA
   ================================ */
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },

  /* ===============================
       CAREER CENTER ROUTING
   ================================= */

  /* ===============================
       BERITA (BARU)
   ================================ */
  { path: 'berita', component: BeritaListComponent },
  { path: 'berita/:id', component: BeritaDetailComponent },

  /* ===============================
       CAREER CENTER
   ================================ */

  {
    path: 'career',
    component: CareerLayoutComponent,
    children: [
      { path: '', component: CareerComponent },
      { path: 'home', component: CareerComponent },

      // LIST LOWONGAN (halaman utama loker)
      { path: 'loker', component: LowonganComponent },

      // ⭐⭐ TAMBAHAN: HALAMAN DETAIL LOWONGAN
      // contoh URL: /career/loker/5
      { path: 'loker/:id', component: LowonganDetailComponent },

      // LIST MAGANG
      { path: 'magang', component: MagangComponent },

      // ⭐⭐ TAMBAHAN: HALAMAN DETAIL MAGANG
      // contoh URL: /career/magang/3
      { path: 'magang/:id', component: MagangDetailComponent },

      { path: 'event', component: EventComponent },

      // ⭐⭐ TAMBAHAN: HALAMAN DETAIL EVENT
      // contoh URL: /career/event/2
      { path: 'event/:id', component: EventDetailComponent },

      /* MITRA */
      { path: 'mitra', component: MitraComponent },

      { path: 'login-admin', component: LoginadminComponent },

      /* ===============================

           ADMIN DASHBOARD ROUTING
       ================================ */

      {
        path: 'admin',
        component: DashboardAdminComponent,
        children: [
          /* CRUD LOWONGAN */
          { path: 'lowongan', component: ListLowonganComponent },
          { path: 'lowongan/add', component: FormLowonganComponent },
          { path: 'lowongan/edit/:id', component: FormLowonganComponent },

          // CRUD PERUSAHAAN
          /* CRUD PERUSAHAAN */
          { path: 'perusahaan', component: ListPerusahaanComponent },
          { path: 'perusahaan/tambah', component: FormPerusahaanComponent },
          { path: 'perusahaan/edit/:id', component: FormPerusahaanComponent },

          // CRUD ADMIN
          /* CRUD ADMIN */
          { path: 'admin', component: ListAdminComponent },
          { path: 'admin/tambah', component: FormAdminComponent },
          { path: 'admin/edit/:id', component: FormAdminComponent },
        ],
      },
    ],
  },

  /* ===============================
       FALLBACK
   ================================ */

  { path: '**', redirectTo: '' },
];
