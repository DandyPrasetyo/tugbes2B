import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-jalur-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jalur-detail.component.html',
  styleUrls: ['./jalur-detail.component.css'],
})
export class JalurDetailComponent implements OnInit {
  jalur: any;
  kode: string = '';


  dataJalur: any = {
    'snbp': {
      nama: 'SNBP (Seleksi Nasional Berdasarkan Prestasi)',
      deskripsi:
        'Seleksi nasional berdasarkan prestasi akademik dan non-akademik tanpa tes tertulis.',
      poster: 'assets/img/snbp.jpg',
      biaya: 'Gratis',
      jadwal: 'Februari – Maret 2025',
      link: 'https://snpmb.bppp.kemdikbud.go.id',
      syarat: [
        'Siswa kelas XII SMA/SMK/MA',
        'Memiliki nilai rapor yang telah diisikan di PDSS',
        'Memenuhi ketentuan SNPMB',
      ],
      ukt: [
        { jenjang: 'D4 Rekayasa', ukt: 'Rp 6.500.000', ipi: 'Rp 22.500.000' },
        { jenjang: 'D4 Non Rekayasa', ukt: 'Rp 6.250.000', ipi: 'Rp 20.000.000' },
        { jenjang: 'D3 Rekayasa', ukt: 'Rp 5.000.000', ipi: 'Rp 20.000.000' },
        { jenjang: 'D3 Non Rekayasa', ukt: 'Rp 4.750.000', ipi: 'Rp 17.500.000' },
      ],
      catatan: 'UKT Semester 1 dan IPI dibayarkan sekaligus saat daftar ulang.',
    },


    'snbt': {
      nama: 'SNBT (Seleksi Nasional Berdasarkan Tes)',
      deskripsi:
        'Seleksi nasional berdasarkan tes melalui UTBK yang dilaksanakan secara nasional.',
      poster: 'assets/img/snbt2026.png',
      biaya: 'Rp 200.000 - 300.000',
      jadwal: 'Maret – Juni 2025',
      link: 'https://snpmb.bppp.kemdikbud.go.id',
      syarat: [
        'Memiliki akun SNPMB',
        'Mengikuti UTBK sesuai jadwal',
        'Tidak lulus SNBP (jika mendaftar SNBT)',
      ],
      ukt: [
        { jenjang: 'D4 Rekayasa', ukt: 'Rp 6.500.000', ipi: 'Rp 22.500.000' },
        { jenjang: 'D3 Rekayasa', ukt: 'Rp 5.000.000', ipi: 'Rp 20.000.000' },
      ],
      catatan: 'Besaran UKT dan IPI dapat berbeda tergantung kampus tujuan.',
    },


    'mandiri-polinema': {
      nama: 'Mandiri Polinema',
      deskripsi:
        'Seleksi mandiri yang diselenggarakan langsung oleh Politeknik Negeri Malang.',
      poster: 'assets/img/mandiri.png',
      biaya: 'Rp 300.000',
      jadwal: 'Mei – Juli 2025',
      link: 'https://spmb.polinema.ac.id',
      syarat: [
        'Lulusan SMA/SMK/MA sederajat',
        'Mengisi formulir pendaftaran Mandiri',
        'Mengikuti seleksi internal Polinema',
      ],
      ukt: [
        { jenjang: 'D4 Rekayasa', ukt: 'Rp 6.500.000', ipi: 'Rp 22.500.000' },
        { jenjang: 'D4 Non Rekayasa', ukt: 'Rp 6.250.000', ipi: 'Rp 20.000.000' },
        { jenjang: 'D3 Rekayasa', ukt: 'Rp 5.000.000', ipi: 'Rp 20.000.000' },
        { jenjang: 'D3 Non Rekayasa', ukt: 'Rp 4.750.000', ipi: 'Rp 17.500.000' },
      ],
      catatan: 'UKT Semester 1 dan IPI dibayarkan sekaligus saat daftar ulang.',
    },


    'mandiri-konsorsium': {
      nama: 'Mandiri Konsorsium (SM-KPN)',
      deskripsi:
        'Seleksi mandiri bersama Politeknik Negeri se-Indonesia berbasis Computer Based Test (CBT).',
      poster: 'assets/img/mandirikon.jpg',
      biaya: 'Rp 300.000',
      jadwal: 'Mei – Juli 2025',
      link: 'https://spmb.polinema.ac.id',
      syarat: [
        'Lulusan SMA/SMK/MA sederajat',
        'Lolos verifikasi data SNPMB',
        'Mengikuti seleksi internal kampus',
      ],
      ukt: [
        { jenjang: 'D4 Rekayasa', ukt: 'Rp 5.000.000', ipi: 'Rp 6.500.000' },
        { jenjang: 'D3 Rekayasa', ukt: 'Rp 3.750.000', ipi: 'Rp 5.000.000' },
        { jenjang: 'D3 Non Rekayasa', ukt: 'Rp 3.600.000', ipi: 'Rp 3.500.000' },
      ],
      catatan: 'Besaran UKT dan IPI dapat berbeda tergantung kampus tujuan.',
    },
  };


  constructor(private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    this.kode = this.route.snapshot.paramMap.get('kode') ?? '';
    this.jalur = this.dataJalur[this.kode];


    if (!this.jalur) {
      this.router.navigate(['/pmb/jalur-pendaftaran']);
    }
  }


  kembali() {
    this.router.navigate(['/pmb/jalur-pendaftaran']);
  }


  bukaPortal() {
    if (this.jalur?.link) {
      window.open(this.jalur.link, '_blank');
    }
  }
}
