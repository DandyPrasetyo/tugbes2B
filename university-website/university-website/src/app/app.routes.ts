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

/* ⭐⭐ TAMBAHAN: halaman detail mitra */
import { MitraDetailComponent } from './components/career/mitra/mitra-detail/mitra-detail.component';

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

/* ===============================
   AKADEMIK (BARU)
================================ */
import { MahasiswaAktifComponent } from './components/akademik/mahasiswa-aktif/mahasiswa-aktif.component';
import { DosenKehadiranComponent } from './components/akademik/dosen-kehadiran/dosen-kehadiran.component';

/* ⭐⭐ TAMBAHAN: PRODI */
import { ProdiComponent } from './components/akademik/prodi/prodi.component';

/* ⭐⭐ TAMBAHAN: KURIKULUM */
import { KurikulumComponent } from './components/akademik/kurikulum/kurikulum.component';

/* ⭐⭐ TAMBAHAN: JADWAL KULIAH */
import { JadwalKuliahComponent } from './components/jadwal-kuliah/jadwal-kuliah.component';

/* ⭐⭐ TAMBAHAN: ORGANISASI & UKM (KEMAHASISWAAN) */
import { OrganisasiMahasiswaComponent } from './components/kemahasiswaan/organisasi-mahasiswa/organisasi-mahasiswa.component';

/* ⭐⭐ TAMBAHAN: BEASISWA (KEMAHASISWAAN) */
import { BeasiswaComponent } from './components/kemahasiswaan/beasiswa/beasiswa.component';
import { BeasiswaDetailComponent } from './components/kemahasiswaan/beasiswa/beasiswa-detail/beasiswa-detail.component';

/* ⭐⭐ TAMBAHAN: ALUMNI (KEMAHASISWAAN) */
import { AlumniComponent } from './components/kemahasiswaan/alumni/alumni.component';

export const routes: Routes = [
  /* ===============================
     WEBSITE UTAMA
  ================================= */
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },

  /* ===============================
     BERITA (BARU)
  ================================= */
  { path: 'berita', component: BeritaListComponent },
  { path: 'berita/:id', component: BeritaDetailComponent },

  /* ===============================
     AKADEMIK (BARU)
  ================================= */
  {
    path: 'akademik/mahasiswa-aktif',
    component: MahasiswaAktifComponent,
  },
  {
    path: 'akademik/dosen-kehadiran',
    component: DosenKehadiranComponent,
  },
  {
    path: 'akademik/prodi',          // ✅ route untuk dropdown Prodi
    component: ProdiComponent,
  },
  {
    path: 'akademik/kurikulum',      // ✅ route baru Kurikulum
    component: KurikulumComponent,
  },
  {
    path: 'akademik/jadwal-kuliah',  // ✅ route BARU Jadwal Kuliah
    component: JadwalKuliahComponent,
  },

  /* ===============================
     KEMAHASISWAAN – ORGANISASI & UKM
  ================================= */
  {
    path: 'kemahasiswaan/organisasi-mahasiswa',
    component: OrganisasiMahasiswaComponent,
  },

  /* ===============================
     KEMAHASISWAAN – BEASISWA
  ================================= */
  {
    path: 'kemahasiswaan/beasiswa',
    component: BeasiswaComponent,
  },
  {
    path: 'kemahasiswaan/beasiswa/:id',
    component: BeasiswaDetailComponent,
  },

  /* ===============================
     KEMAHASISWAAN – ALUMNI
  ================================= */
  {
    path: 'kemahasiswaan/alumni',
    component: AlumniComponent,
  },

  /* ===============================
     CAREER CENTER
  ================================= */
  {
    path: 'career',
    component: CareerLayoutComponent,
    children: [
      { path: '', component: CareerComponent },
      { path: 'home', component: CareerComponent },

      // LIST LOWONGAN
      { path: 'loker', component: LowonganComponent },
      { path: 'loker/:id', component: LowonganDetailComponent },

      // LIST MAGANG
      { path: 'magang', component: MagangComponent },
      { path: 'magang/:id', component: MagangDetailComponent },

      // EVENT
      { path: 'event', component: EventComponent },
      { path: 'event/:id', component: EventDetailComponent },

      /* MITRA */
      { path: 'mitra', component: MitraComponent },

      /* ⭐⭐ TAMBAHAN: DETAIL MITRA */
      { path: 'mitra/:id', component: MitraDetailComponent },

      { path: 'login-admin', component: LoginadminComponent },

      /* ===============================
         ADMIN DASHBOARD
       ================================= */
      {
        path: 'admin',
        component: DashboardAdminComponent,
        children: [
          { path: 'lowongan', component: ListLowonganComponent },
          { path: 'lowongan/add', component: FormLowonganComponent },
          { path: 'lowongan/edit/:id', component: FormLowonganComponent },

          { path: 'perusahaan', component: ListPerusahaanComponent },
          { path: 'perusahaan/tambah', component: FormPerusahaanComponent },
          { path: 'perusahaan/edit/:id', component: FormPerusahaanComponent },

          { path: 'admin', component: ListAdminComponent },
          { path: 'admin/tambah', component: FormAdminComponent },
          { path: 'admin/edit/:id', component: FormAdminComponent },
        ],
      },
    ],
  },

  /* ===============================
     FALLBACK
  ================================= */
  { path: '**', redirectTo: '' },
];
