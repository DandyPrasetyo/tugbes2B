import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pengumuman',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pengumuman.component.html',
  styleUrls: ['./pengumuman.component.css'],
})
export class PengumumanComponent {
  pengumumanList = [
    {
      id: 1,
      judul: 'Pengumuman Pembukaan PMB Tahun Akademik 2025/2026',
      tanggal: '5 Januari 2025',
      ringkas:
        'Politeknik Negeri Malang PSDKU Lumajang resmi membuka penerimaan mahasiswa baru.',
    },
    {
      id: 2,
      judul: 'Jadwal dan Ketentuan Seleksi Jalur SNBP',
      tanggal: '10 Februari 2025',
      ringkas:
        'Informasi lengkap jadwal, kuota, dan syarat pendaftaran jalur SNBP.',
    },
    {
      id: 3,
      judul: 'Pengumuman Seleksi Jalur SNBT',
      tanggal: '20 April 2025',
      ringkas:
        'Peserta diharapkan memperhatikan ketentuan pelaksanaan UTBK-SNBT.',
    },
    {
      id: 4,
      judul: 'Pendaftaran Jalur Mandiri Polinema',
      tanggal: '15 Juni 2025',
      ringkas:
        'Jalur mandiri dibuka bagi lulusan SMA/SMK/MA dengan seleksi internal.',
    },
  ];
}
