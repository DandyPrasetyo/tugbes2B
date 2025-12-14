import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navigation = [
    {
      name: 'BERANDA',
      path: '/',
    },
    {
      name: 'PROFIL',
      children: [
        { name: 'Profil', path: '/profil' },
        { name: 'Tentang Kampus', path: '/tentang-kampus' },
        { name: 'Visi & Misi', path: '/visi-misi' },
        { name: 'Struktur Organisasi', path: '/struktur-organisasi' },
        { name: 'Fasilitas', path: '/fasilitas' },
      ],
    },
    {
      name: 'AKADEMIK',
      children: [
        { name: 'Mahasiswa Aktif', path: '/mahasiswa-aktif' },
        { name: 'Dosen & Kehadiran', path: '/dosen-kehadiran' },
        { name: 'Prodi', path: '/prodi' },
        { name: 'Kurikulum', path: '/kurikulum' },
        { name: 'Jadwal Kuliah', path: '/jadwal-kuliah' },
      ],
    },
    {
      name: 'KEMAHASISWAAN',
      children: [
        { name: 'Organisasi Mahasiswa', path: '/organisasi-mahasiswa' },
        { name: 'Beasiswa', path: '/beasiswa' },
        { name: 'Alumni', path: '/alumni' },
      ],
    },
    {
      name: 'PMB',
      children: [
        { name: 'Pengumuman', path: '/pmb/pengumuman' },
        { name: 'Jalur Pendaftaran', path: '/pmb/jalur' },
        { name: 'Hasil Seleksi', path: '/pmb/hasil' },
      ],
    },
    {
      name: 'CARRER',
      path: '/career',
    },
    {
      name: 'CONTACT',
      path: '/contact',
    },
  ];
}
