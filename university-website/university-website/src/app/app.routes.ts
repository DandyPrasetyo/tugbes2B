import { Routes } from '@angular/router';

/* ===============================
   WEBSITE KAMPUS
================================ */
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

/* ===============================

   BERITA
=======
   PROFIL (BARU)
================================ */
import { ProfilComponent } from './components/profil/profil.component'; // ⭐⭐ TAMBAHAN: PROFIL
import { VisiMisiComponent } from './components/profil/visi-misi/visi-misi.component'; // ⭐⭐ TAMBAHAN: VISI MISI

/* ===============================
   BERITA (BARU)
>>>>>>> b6dee55 (sedikit perubahan)
================================ */
import { BeritaListComponent } from './components/berita/berita-list/berita-list.component';
import { BeritaDetailComponent } from './components/berita/berita-detail/berita-detail.component';

/* ===============================
   PMB
================================ */
import { PengumumanComponent } from './components/pmb/pengumuman/pengumuman.component';
import { PengumumanDetailComponent } from './components/pmb/pengumuman-detail/pengumuman-detail.component';
import { JalurPendaftaranComponent } from './components/pmb/jalur-pendaftaran/jalur-pendaftaran.component';
import { JalurDetailComponent } from './components/pmb/jalur-detail/jalur-detail.component';
import { HasilSeleksiComponent } from './components/pmb/hasil-seleksi/hasil-seleksi.component';

/* ===============================
   CAREER CENTER
================================ */
import { CareerLayoutComponent } from './components/career/layout-career/layout-career.component';
import { CareerComponent } from './components/career/career.component';
import { LowonganComponent } from './components/career/lowongan/lowongan.component';
import { LowonganDetailComponent } from './components/career/lowongan/lowongan-detail/lowongan-detail.component';
import { MagangComponent } from './components/career/magang/magang.component';
import { MagangDetailComponent } from './components/career/magang/magang-detail/magang-detail.component';
import { EventComponent } from './components/career/event/event.component';
import { EventDetailComponent } from './components/career/event/event-detail/event-detail.component';
import { LoginadminComponent } from './components/career/login-admin/login-admin.component';

/* ===============================
   MITRA
================================ */
import { MitraComponent } from './components/career/mitra/mitra.component';
import { MitraDetailComponent } from './components/career/mitra/mitra-detail/mitra-detail.component';

/* ===============================
   DASHBOARD ADMIN
================================ */
import { DashboardAdminComponent } from './components/career/dashboard-admin/dashboard-admin.component';
import { ListLowonganComponent } from './components/career/dashboard-admin/crud-lowongan/list-lowongan/list-lowongan.component';
import { FormLowonganComponent } from './components/career/dashboard-admin/crud-lowongan/form-lowongan/form-lowongan.component';
import { ListPerusahaanComponent } from './components/career/dashboard-admin/crud-perusahaan/list-perusahaan/list-perusahaan.component';
import { FormPerusahaanComponent } from './components/career/dashboard-admin/crud-perusahaan/form-perusahaan/form-perusahaan.component';
import { ListAdminComponent } from './components/career/dashboard-admin/crud-admin/list-admin/list-admin.component';
import { FormAdminComponent } from './components/career/dashboard-admin/crud-admin/form-admin/form-admin.component';

/* ===============================
   AKADEMIK
================================ */
import { MahasiswaAktifComponent } from './components/akademik/mahasiswa-aktif/mahasiswa-aktif.component';
import { DosenKehadiranComponent } from './components/akademik/dosen-kehadiran/dosen-kehadiran.component';
import { ProdiComponent } from './components/akademik/prodi/prodi.component';
import { KurikulumComponent } from './components/akademik/kurikulum/kurikulum.component';
import { JadwalKuliahComponent } from './components/jadwal-kuliah/jadwal-kuliah.component';

/* ===============================
   KEMAHASISWAAN
================================ */
import { OrganisasiMahasiswaComponent } from './components/kemahasiswaan/organisasi-mahasiswa/organisasi-mahasiswa.component';
import { BeasiswaComponent } from './components/kemahasiswaan/beasiswa/beasiswa.component';
import { BeasiswaDetailComponent } from './components/kemahasiswaan/beasiswa/beasiswa-detail/beasiswa-detail.component';
import { AlumniComponent } from './components/kemahasiswaan/alumni/alumni.component';

export const routes: Routes = [
  /* ===============================
     WEBSITE UTAMA
  ================================= */
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },

  /* ===============================
     BERITA
=======
     PROFIL (BARU)
  ================================= */
  {
    path: 'profil',                   // ✅ route untuk dropdown Profil
    component: ProfilComponent,
  },
  { path: 'profil/visi-misi', component: VisiMisiComponent }, // ⭐⭐ TAMBAHAN: VISI MISI

  /* ===============================
     BERITA (BARU)

  ================================= */
  { path: 'berita', component: BeritaListComponent },
  { path: 'berita/:id', component: BeritaDetailComponent },

  /* ===============================
     PMB
  ================================= */
  { path: 'pmb/pengumuman', component: PengumumanComponent },
  { path: 'pmb/pengumuman/:id', component: PengumumanDetailComponent },
  { path: 'pmb/jalur-pendaftaran', component: JalurPendaftaranComponent },

  /* 🔑 DETAIL JALUR (Mandiri Polinema & Konsorsium) */
  { path: 'pmb/jalur/:kode', component: JalurDetailComponent },

  { path: 'pmb/hasil-seleksi', component: HasilSeleksiComponent },

  /* ===============================
     AKADEMIK
  ================================= */
  { path: 'akademik/mahasiswa-aktif', component: MahasiswaAktifComponent },
  { path: 'akademik/dosen-kehadiran', component: DosenKehadiranComponent },
  { path: 'akademik/prodi', component: ProdiComponent },
  { path: 'akademik/kurikulum', component: KurikulumComponent },
  { path: 'akademik/jadwal-kuliah', component: JadwalKuliahComponent },

  /* ===============================
     KEMAHASISWAAN
  ================================= */
  {
    path: 'kemahasiswaan/organisasi-mahasiswa',
    component: OrganisasiMahasiswaComponent,
  },
  { path: 'kemahasiswaan/beasiswa', component: BeasiswaComponent },
  { path: 'kemahasiswaan/beasiswa/:id', component: BeasiswaDetailComponent },
  { path: 'kemahasiswaan/alumni', component: AlumniComponent },

  /* ===============================
     CAREER CENTER
  ================================= */
  {
    path: 'career',
    component: CareerLayoutComponent,
    children: [
      { path: '', component: CareerComponent },
      { path: 'home', component: CareerComponent },

      { path: 'loker', component: LowonganComponent },
      { path: 'loker/:id', component: LowonganDetailComponent },

      { path: 'magang', component: MagangComponent },
      { path: 'magang/:id', component: MagangDetailComponent },

      { path: 'event', component: EventComponent },
      { path: 'event/:id', component: EventDetailComponent },

      { path: 'mitra', component: MitraComponent },
      { path: 'mitra/:id', component: MitraDetailComponent },

      { path: 'login-admin', component: LoginadminComponent },

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
