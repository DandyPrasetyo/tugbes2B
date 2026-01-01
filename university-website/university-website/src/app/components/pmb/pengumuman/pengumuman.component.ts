import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type JalurPengumumanId = 'snbp' | 'snbt' | 'mandiri' | 'umum';

interface PengumumanItem {
  id: JalurPengumumanId;
  judul: string;
  tanggal: string;
  ringkas: string;
  label: string;      // label kecil di atas judul, misal "Jalur SNBP"
  warna: 'sky' | 'emerald' | 'amber'; // untuk beda warna kartu di template
}

@Component({
  selector: 'app-pengumuman',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pengumuman.component.html',
  styleUrls: ['./pengumuman.component.css'],
})
export class PengumumanComponent {
  pengumumanList: PengumumanItem[] = [
    {
      id: 'snbp',
      judul: 'Hasil Seleksi Penerimaan Mahasiswa Baru Jalur SNBP',
      tanggal: '20 Maret 2025',
      ringkas:
        'Daftar peserta yang dinyatakan lulus seleksi penerimaan mahasiswa baru melalui jalur SNBP.',
      label: 'Jalur SNBP',
      warna: 'sky',
    },
    {
      id: 'snbt',
      judul: 'Hasil Seleksi Penerimaan Mahasiswa Baru Jalur SNBT',
      tanggal: '10 Mei 2025',
      ringkas:
        'Pengumuman kelulusan peserta UTBK-SNBT untuk penerimaan mahasiswa baru Polinema PSDKU Lumajang.',
      label: 'Jalur SNBT',
      warna: 'emerald',
    },
    {
      id: 'mandiri',
      judul: 'Hasil Seleksi Penerimaan Mahasiswa Baru Jalur Mandiri',
      tanggal: '30 Juli 2025',
      ringkas:
        'Informasi resmi kelulusan seleksi Jalur Mandiri Polinema beserta ketentuan daftar ulang.',
      label: 'Jalur Mandiri',
      warna: 'amber',
    },
    {
      id: 'umum',
      judul: 'Pengumuman Pembukaan PMB Tahun Akademik 2025/2026',
      tanggal: '5 Januari 2025',
      ringkas:
        'Politeknik Negeri Malang PSDKU Lumajang resmi membuka penerimaan mahasiswa baru tahun akademik 2025/2026.',
      label: 'Informasi Umum',
      warna: 'sky',
    },
  ];
}
