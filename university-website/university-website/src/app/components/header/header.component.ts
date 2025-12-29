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
    { name: 'BERANDA', path: '/' },
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
        { name: 'Mahasiswa Aktif', path: '/akademik/mahasiswa-aktif' },
        { name: 'Dosen & Kehadiran', path: '/akademik/dosen-kehadiran' },
        { name: 'Prodi', path: '/akademik/prodi' },
        { name: 'Kurikulum', path: '/akademik/kurikulum' },
        { name: 'Jadwal Kuliah', path: '/akademik/jadwal-kuliah' },
      ],
    },
    {
      name: 'KEMAHASISWAAN',
      children: [
        // ✅ disesuaikan ke route kemahasiswaan/organisasi-mahasiswa
        { name: 'Organisasi Mahasiswa', path: '/kemahasiswaan/organisasi-mahasiswa' },
        { name: 'Beasiswa', path: '/kemahasiswaan/beasiswa' },
        { name: 'Alumni', path: '/kemahasiswaan/alumni' },
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
    { name: 'CARRER', path: '/career' },
    { name: 'CONTACT', path: '/contact' },
  ];
}
