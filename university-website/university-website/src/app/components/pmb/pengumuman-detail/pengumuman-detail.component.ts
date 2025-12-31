import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pengumuman-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pengumuman-detail.component.html',
  styleUrls: ['./pengumuman-detail.component.css'],
})
export class PengumumanDetailComponent {
  pengumuman: any;

  data = [
    /* ================= PEMBUKAAN ================= */
    {
      id: '1',
      judul: 'Pembukaan PMB Tahun Akademik 2025/2026',
      tanggal: '5 Januari 2025',
      isi: `Politeknik Negeri Malang PSDKU Lumajang secara resmi membuka
Penerimaan Mahasiswa Baru (PMB) Tahun Akademik 2025/2026.

Pendaftaran dilakukan melalui jalur SNBP, SNBT, dan Mandiri
sesuai ketentuan yang berlaku.`,
      jadwal: [
        'Pendaftaran: Januari – Juni 2025',
        'Seleksi: Sesuai jalur masing-masing',
        'Pengumuman: Bertahap',
      ],
      syarat: [
        'Warga Negara Indonesia',
        'Lulusan SMA/SMK/MA sederajat',
        'Sehat jasmani dan rohani',
      ],
    },

    /* ================= SNBP ================= */
    {
      id: '2',
      judul: 'Ketentuan Seleksi Jalur SNBP',
      tanggal: '10 Februari 2025',
      isi: `Seleksi Nasional Berdasarkan Prestasi (SNBP) diperuntukkan
bagi siswa berprestasi akademik maupun non-akademik.

Seleksi dilakukan secara nasional tanpa tes tertulis.`,
      jadwal: [
        'Pengisian PDSS: Januari – Februari 2025',
        'Pendaftaran SNBP: Februari 2025',
        'Pengumuman hasil SNBP: Maret 2025',
      ],
      syarat: [
        'Siswa kelas XII SMA/SMK/MA',
        'Memiliki nilai rapor yang telah diisikan di PDSS',
        'Memenuhi ketentuan SNPMB',
      ],
    },

    /* ================= SNBT ================= */
    {
      id: '3',
      judul: 'Informasi UTBK-SNBT',
      tanggal: '20 April 2025',
      isi: `Seleksi Nasional Berdasarkan Tes (SNBT) dilakukan melalui
Ujian Tulis Berbasis Komputer (UTBK) secara nasional.`,
      jadwal: [
        'Registrasi UTBK: Maret 2025',
        'Pelaksanaan UTBK: April – Mei 2025',
        'Pengumuman hasil SNBT: Juni 2025',
      ],
      syarat: [
        'Memiliki akun SNPMB',
        'Mengikuti UTBK sesuai jadwal',
        'Tidak lulus SNBP (jika mendaftar SNBT)',
      ],
    },

    /* ================= MANDIRI ================= */
    {
      id: '4',
      judul: 'Pendaftaran Jalur Mandiri Polinema',
      tanggal: '15 Juni 2025',
      isi: `Jalur Mandiri Polinema merupakan seleksi internal yang
diselenggarakan langsung oleh Politeknik Negeri Malang.`,
      jadwal: [
        'Pendaftaran online: Juni – Juli 2025',
        'Tes tertulis & wawancara: Juli 2025',
        'Pengumuman hasil: Juli 2025',
      ],
      syarat: [
        'Lulusan SMA/SMK/MA sederajat',
        'Mengisi formulir pendaftaran Mandiri',
        'Mengikuti seleksi internal Polinema',
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.pengumuman = this.data.find((d) => d.id === id);
  }
}
