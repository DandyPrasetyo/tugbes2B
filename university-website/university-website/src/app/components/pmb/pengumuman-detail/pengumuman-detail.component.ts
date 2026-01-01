import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

type PengumumanId = 'umum' | 'snbp' | 'snbt' | 'mandiri';

interface HasilRow {
  no: number;
  nama: string;
  peserta: string;
  status: string;
}

interface PengumumanDetail {
  id: PengumumanId;
  judul: string;       // judul panjang di isi paragraf
  judulJalur: string;  // teks "Jalur SNBT / Jalur SNBP / Jalur MANDIRI"
  tanggal: string;
  isi: string;
  jadwal: string[];
  syarat: string[];
  hasil?: HasilRow[];
}

@Component({
  selector: 'app-pengumuman-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pengumuman-detail.component.html',
  styleUrls: ['./pengumuman-detail.component.css'],
})
export class PengumumanDetailComponent {
  pengumuman: PengumumanDetail | undefined;

  data: PengumumanDetail[] = [
    /* ================= PEMBUKAAN (UMUM) ================= */
    {
      id: 'umum',
      judul: 'Pembukaan PMB Tahun Akademik 2025/2026',
      judulJalur: 'Informasi Umum PMB',
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
      id: 'snbp',
      judul: 'Ketentuan Seleksi Jalur SNBP',
      judulJalur: 'Jalur SNBP',
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
      hasil: [
        { no: 1, nama: 'Andika', peserta: '10234', status: 'Lulus' },
        { no: 2, nama: 'Mahendra', peserta: '10567', status: 'Lulus' },
        { no: 3, nama: 'Putri Lestari', peserta: '10982', status: 'Lulus' },
        { no: 4, nama: 'Rizky Pratama', peserta: '11345', status: 'Lulus' },
        { no: 5, nama: 'Salsabila', peserta: '11789', status: 'Lulus' },
        { no: 6, nama: 'Anindya', peserta: '12046', status: 'Lulus' },
        { no: 7, nama: 'Fajar Nugroho', peserta: '12490', status: 'Lulus' },
        { no: 8, nama: 'Nabila', peserta: '12835', status: 'Lulus' },
        { no: 9, nama: 'Khairunnisa', peserta: '13278', status: 'Lulus' },
        { no: 10, nama: 'Dimas Arya', peserta: '13604', status: 'Lulus' },
        { no: 11, nama: 'Saputra', peserta: '14059', status: 'Lulus' },
        { no: 12, nama: 'Aulia Rahman', peserta: '14382', status: 'Lulus' },
        { no: 13, nama: 'Intan Cahyani', peserta: '14716', status: 'Lulus' },
        { no: 14, nama: 'Bayu Aditya', peserta: '15093', status: 'Lulus' },
        { no: 15, nama: 'Zahra Amalia', peserta: '15428', status: 'Lulus' },
        { no: 16, nama: 'Reza', peserta: '15870', status: 'Lulus' },
      ],
    },

    /* ================= SNBT ================= */
    {
      id: 'snbt',
      judul: 'Informasi UTBK-SNBT',
      judulJalur: 'Jalur SNBT',
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
      hasil: [
        { no: 1, nama: 'Andika', peserta: '10234', status: 'Lulus' },
        { no: 2, nama: 'Mahendra', peserta: '10567', status: 'Lulus' },
        { no: 3, nama: 'Putri Lestari', peserta: '10982', status: 'Lulus' },
        { no: 4, nama: 'Rizky Pratama', peserta: '11345', status: 'Lulus' },
        { no: 5, nama: 'Salsabila', peserta: '11789', status: 'Lulus' },
        { no: 6, nama: 'Anindya', peserta: '12046', status: 'Lulus' },
        { no: 7, nama: 'Fajar Nugroho', peserta: '12490', status: 'Lulus' },
        { no: 8, nama: 'Nabila', peserta: '12835', status: 'Lulus' },
        { no: 9, nama: 'Khairunnisa', peserta: '13278', status: 'Lulus' },
        { no: 10, nama: 'Dimas Arya', peserta: '13604', status: 'Lulus' },
        { no: 11, nama: 'Saputra', peserta: '14059', status: 'Lulus' },
        { no: 12, nama: 'Aulia Rahman', peserta: '14382', status: 'Lulus' },
        { no: 13, nama: 'Intan Cahyani', peserta: '14716', status: 'Lulus' },
        { no: 14, nama: 'Bayu Aditya', peserta: '15093', status: 'Lulus' },
        { no: 15, nama: 'Zahra Amalia', peserta: '15428', status: 'Lulus' },
        { no: 16, nama: 'Reza', peserta: '15870', status: 'Lulus' },
        { no: 17, nama: 'Firmansyah', peserta: '16245', status: 'Lulus' },
        { no: 18, nama: 'Dinda', peserta: '16691', status: 'Lulus' },
        { no: 19, nama: 'Oktaviani', peserta: '17038', status: 'Lulus' },
        { no: 20, nama: 'Kevin Prakoso', peserta: '17460', status: 'Lulus' },
        { no: 21, nama: 'Nurul Hidayah', peserta: '17895', status: 'Lulus' },
      ],
    },

    /* ================= MANDIRI ================= */
    {
      id: 'mandiri',
      judul: 'Pendaftaran Jalur Mandiri Polinema',
      judulJalur: 'Jalur MANDIRI',
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
      hasil: [
        { no: 1, nama: 'Andika', peserta: '10234', status: 'Lulus' },
        { no: 2, nama: 'Mahendra', peserta: '10567', status: 'Lulus' },
        { no: 3, nama: 'Putri Lestari', peserta: '10982', status: 'Lulus' },
        { no: 4, nama: 'Rizky Pratama', peserta: '11345', status: 'Lulus' },
        { no: 5, nama: 'Salsabila', peserta: '11789', status: 'Lulus' },
        { no: 6, nama: 'Anindya', peserta: '12046', status: 'Lulus' },
        { no: 7, nama: 'Fajar Nugroho', peserta: '12490', status: 'Lulus' },
        { no: 8, nama: 'Nabila', peserta: '12835', status: 'Lulus' },
        { no: 9, nama: 'Khairunnisa', peserta: '13278', status: 'Lulus' },
        { no: 10, nama: 'Dimas Arya', peserta: '13604', status: 'Lulus' },
      ],
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    const idFromUrl = (this.route.snapshot.paramMap.get('id') || '') as PengumumanId;
    this.pengumuman = this.data.find((d) => d.id === idFromUrl);

    if (!this.pengumuman) {
      this.router.navigate(['/pmb/pengumuman']);
    }
  }

  kembali() {
    this.router.navigate(['/pmb/pengumuman']);
  }

  // gunakan dynamic import supaya aman untuk SSR / Vite
  async downloadPDF() {
    if (typeof window === 'undefined') {
      return;
    }

    const element = document.getElementById('pengumuman-container');
    if (!element || !this.pengumuman) {
      return;
    }

    const html2pdfModule = await import('html2pdf.js');
    const html2pdf =
      (html2pdfModule as any).default || (html2pdfModule as any);

    const opt = {
      margin: 10,
      filename: `Pengumuman_${this.pengumuman.id.toUpperCase()}_${new Date().getTime()}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    };

    (html2pdf() as any).set(opt).from(element).save();
  }
}
