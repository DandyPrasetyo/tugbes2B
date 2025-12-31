import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jalur-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jalur-detail.component.html',
  styleUrls: ['./jalur-detail.component.css'],
})
export class JalurDetailComponent implements OnInit {
  jalur: any;

  dataJalur: any = {
    'mandiri-polinema': {
      nama: 'Mandiri Polinema',
      deskripsi:
        'Seleksi mandiri yang diselenggarakan langsung oleh Politeknik Negeri Malang.',
      biaya: 'Rp 300.000',
      jadwal: 'Mei – Juli 2025',
      link: 'https://spmb.polinema.ac.id',
      ukt: [
        { jenjang: 'D4 Rekayasa', ukt: 'Rp 6.500.000', ipi: 'Rp 22.500.000' },
        {
          jenjang: 'D4 Non Rekayasa',
          ukt: 'Rp 6.250.000',
          ipi: 'Rp 20.000.000',
        },
        { jenjang: 'D3 Rekayasa', ukt: 'Rp 5.000.000', ipi: 'Rp 20.000.000' },
        {
          jenjang: 'D3 Non Rekayasa',
          ukt: 'Rp 4.750.000',
          ipi: 'Rp 17.500.000',
        },
      ],
      catatan: 'UKT Semester 1 dan IPI dibayarkan sekaligus saat daftar ulang.',
    },

    'mandiri-konsorsium': {
      nama: 'Mandiri Konsorsium (SM-KPN)',
      deskripsi:
        'Seleksi mandiri bersama Politeknik Negeri se-Indonesia berbasis Computer Based Test (CBT).',
      biaya: 'Rp 300.000',
      jadwal: 'Mei – Juli 2025',
      link: 'https://spmb.polinema.ac.id',
      ukt: [
        { jenjang: 'D4 Rekayasa', ukt: 'Rp 5.000.000', ipi: 'Rp 6.500.000' },
        { jenjang: 'D3 Rekayasa', ukt: 'Rp 3.750.000', ipi: 'Rp 5.000.000' },
        {
          jenjang: 'D3 Non Rekayasa',
          ukt: 'Rp 3.600.000',
          ipi: 'Rp 3.500.000',
        },
      ],
      catatan: 'Besaran UKT dan IPI dapat berbeda tergantung kampus tujuan.',
    },
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const kode = this.route.snapshot.paramMap.get('kode');
    this.jalur = this.dataJalur[kode ?? ''];
  }

  kembali() {
    this.router.navigate(['/pmb/jalur-pendaftaran']);
  }
}
