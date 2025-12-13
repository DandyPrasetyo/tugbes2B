import { Routes } from '@angular/router';



/* ===============================
   WEBSITE KAMPUS
================================ */
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';



/* ===============================
   CAREER CENTER (LAYOUT)
================================ */
import { CareerLayoutComponent } from './components/career/layout-career/layout-career.component';
import { CareerComponent } from './components/career/career.component';
import { LowonganComponent } from './components/career/lowongan/lowongan.component';
import { MagangComponent } from './components/career/magang/magang.component';
import { EventComponent } from './components/career/event/event.component';
import { LoginadminComponent } from './components/career/login-admin/login-admin.component';
// import { MitraComponent } from './components/career/mitra/mitra.component'; // ⭐ route MITRA Baru

// ⭐⭐ TAMBAHAN: halaman mitra (grid) & detail mitra
import { MitraComponent } from './components/career/mitra/mitra.component';




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
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },



  /* ===============================
       CAREER CENTER ROUTING
  ================================ */
  {
    path: 'career',
    component: CareerLayoutComponent, // ⭐ TANPA header/footer, sudah diperbaiki
    children: [
      { path: '', component: CareerComponent },
      { path: 'home', component: CareerComponent },
      { path: 'loker', component: LowonganComponent },
      { path: 'magang', component: MagangComponent },
      { path: 'event', component: EventComponent },

      // ⭐⭐ ROUTE MITRA BARU (GRID & DETAIL)
      { path: 'mitra', component: MitraComponent },
     

      { path: 'login-admin', component: LoginadminComponent },



      /* ===============================
          ADMIN DASHBOARD ROUTING
      ================================ */
      {
        path: 'admin',
        component: DashboardAdminComponent,
        children: [
          // CRUD LOWONGAN
          { path: 'lowongan', component: ListLowonganComponent },
          { path: 'lowongan/add', component: FormLowonganComponent },
          { path: 'lowongan/edit/:id', component: FormLowonganComponent },



          // CRUD PERUSAHAAN
          { path: 'perusahaan', component: ListPerusahaanComponent },
          { path: 'perusahaan/tambah', component: FormPerusahaanComponent },
          { path: 'perusahaan/edit/:id', component: FormPerusahaanComponent },



          // CRUD ADMIN
          { path: 'admin', component: ListAdminComponent },
          { path: 'admin/tambah', component: FormAdminComponent },
          { path: 'admin/edit/:id', component: FormAdminComponent },
        ],
      },
    ],
  },



  { path: '**', redirectTo: '' },
];
