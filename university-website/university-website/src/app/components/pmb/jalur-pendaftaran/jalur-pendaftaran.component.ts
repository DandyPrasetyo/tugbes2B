import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


interface JalurItem {
  kode: string;
  nama: string;
  deskripsi: string;
  logo: string;                    // URL logo atau path gambar
  tipe: 'portal' | 'detail';
  link?: string;                   // untuk portal eksternal
  warna: 'sky' | 'cyan' | 'amber'; // warna card
  ringkas: string;                 // deskripsi singkat tambahan
  keuntungan: string[];            // poin positif jalur ini
}


@Component({
  selector: 'app-jalur-pendaftaran',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jalur-pendaftaran.component.html',
  styleUrls: ['./jalur-pendaftaran.component.css'],
})
export class JalurPendaftaranComponent {
  jalurList: JalurItem[] = [
    {
      kode: 'snbp',
      nama: 'SNBP',
      deskripsi: 'Seleksi Nasional Berdasarkan Prestasi',
      logo: 'assets/img/snpb.png',
      tipe: 'detail',
      warna: 'sky',
      ringkas: 'Jalur tanpa tes tertulis berdasarkan prestasi akademik',
      keuntungan: [
        'Tidak perlu mengikuti tes tertulis',
        'Seleksi berdasarkan nilai rapor',
        'Kesempatan lebih besar dengan prestasi',
        'Proses seleksi transparan dan nasional',
      ],
    },
    {
      kode: 'snbt',
      nama: 'SNBT',
      deskripsi: 'Seleksi Nasional Berdasarkan Tes (UTBK)',
      logo: 'assets/img/snbt.png',
      tipe: 'detail',
      warna: 'cyan',
      ringkas: 'Jalur seleksi melalui UTBK yang dilakukan secara nasional',
      keuntungan: [
        'Terbuka untuk semua lulusan SMA/SMK/MA',
        'Kesempatan kuliah di berbagai universitas',
        'Sistem penilaian objektif dan terukur',
        'Fleksibel dengan berbagai pilihan program studi',
      ],
    },
    {
      kode: 'mandiri-polinema',
      nama: 'Mandiri Polinema',
      deskripsi: 'Seleksi Mandiri Internal Polinema',
      logo: 'assets/img/polinemamandiri.png',
      tipe: 'detail',
      warna: 'amber',
      ringkas: 'Seleksi internal Polinema dengan tes tulis dan wawancara',
      keuntungan: [
        'Proses seleksi cepat dan transparan',
        'Diselenggarakan langsung oleh Polinema',
        'Kesempatan bertemu langsung dengan panitia',
        'Hasil pengumuman lebih cepat',
      ],
    },
    {
      kode: 'mandiri-konsorsium',
      nama: 'Mandiri Konsorsium',
      deskripsi: 'Seleksi Mandiri Konsorsium Politeknik (SM-KPN)',
      logo: 'assets/img/konsorsium.jpeg',
      tipe: 'detail',
      warna: 'sky',
      ringkas: 'Seleksi bersama politeknik negeri se-Indonesia',
      keuntungan: [
        'Satu kali pendaftaran untuk banyak politeknik',
        'Fleksibilitas memilih kampus pilihan',
        'Standar seleksi yang sama dan terukur',
        'Efisien waktu dan biaya pendaftaran',
      ],
    },
  ];


  // Fungsi untuk buka portal eksternal (jika diperlukan)
  bukaPortal(link: string) {
    if (link) {
      window.open(link, '_blank');
    }
  }


  // Fungsi untuk handle logo error
  onLogoError(event: any) {
    event.target.src = 'assets/img/placeholder-logo.png';
  }
}
