import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Prodi {
  id: string;
  nama: string;
  gambar: string;
  deskripsiSingkat: string;
  deskripsiDetail: string;
  akreditasi: string;
  prestasi: string[];
}

@Component({
  selector: 'app-prodi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prodi.component.html',
  styleUrls: ['./prodi.component.css'],
})
export class ProdiComponent {
  // judul halaman (kalau mau dipakai di template)
  pageTitle = 'PRODI';

  // daftar prodi untuk tampilan grid awal
  prodiList: Prodi[] = [
    {
      id: 'ak',
      nama: 'PRODI AK',
      gambar: 'assets/img/prodi/akuntansi.jpg',
      deskripsiSingkat: 'Program Studi Akuntansi Keuangan.',
      deskripsiDetail:
        'Program Studi Akuntansi Keuangan memfokuskan pada pencatatan, analisis, dan pelaporan transaksi keuangan untuk mendukung pengambilan keputusan bisnis di berbagai organisasi.',
      akreditasi: 'B',
      prestasi: [
        'Juara 1 Lomba Akuntansi Regional',
        'Finalis Tax Competition Nasional',
      ],
    },
    {
      id: 'sipil',
      nama: 'PRODI SIPIL',
      gambar: 'assets/img/prodi/sipil.jpeg',
      deskripsiSingkat: 'Program Studi Teknik Sipil.',
      deskripsiDetail:
        'Program Studi Teknik Sipil mempelajari perencanaan, perancangan, pembangunan, serta pemeliharaan infrastruktur seperti jalan, jembatan, dan gedung untuk menunjang kebutuhan masyarakat.',
      akreditasi: 'B',
      prestasi: [
        'Juara Lomba Rancang Jembatan Mahasiswa',
        'Kontributor proyek infrastruktur daerah',
      ],
    },
    {
      id: 'ti',
      nama: 'PRODI TI',
      gambar: 'assets/img/prodi/Informatika.jpg',
      deskripsiSingkat: 'Jurusan Teknologi Informasi PSDku Lumajang.',
      deskripsiDetail:
        'Jurusan Teknologi Informasi adalah bidang studi yang mempelajari pengelolaan, pengembangan, dan pemanfaatan teknologi komputer untuk mendukung kebutuhan organisasi dan masyarakat. Mahasiswa dibekali kemampuan di bidang pemrograman, jaringan komputer, basis data, sistem informasi, serta keamanan teknologi.',
      akreditasi: 'A',
      prestasi: [
        'Juara 1 Lomba Web Design tingkat Internasional',
        'Juara 2 Kompetisi Aplikasi Mobile tingkat Nasional',
        'Finalis Hackathon Teknologi Informasi Nasional',
        'Sertifikasi Kompetensi Programmer oleh BNSP',
        'Penerima Hibah Penelitian Mahasiswa Bidang Teknologi Informasi',
      ],
    },
    {
      id: 'tro',
      nama: 'PRODI TRO',
      gambar: 'assets/img/prodi/tro.jpg',
      deskripsiSingkat: 'Program Studi Teknologi Rekayasa Otomotif.',
      deskripsiDetail:
        'Program Studi Teknologi Rekayasa Otomotif membekali mahasiswa dengan kemampuan desain, perawatan, dan inovasi teknologi kendaraan bermotor, baik konvensional maupun berbasis energi baru.',
      akreditasi: 'B',
      prestasi: [
        'Juara Kontes Mobil Hemat Energi',
        'Inovasi sistem injeksi bahan bakar ramah lingkungan',
      ],
    },
  ];

  // prodi yang sedang dilihat detail (null = tampilan grid)
  selectedProdi: Prodi | null = null;

  lihatDetail(prodi: Prodi) {
    this.selectedProdi = prodi;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  kembali() {
    this.selectedProdi = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
