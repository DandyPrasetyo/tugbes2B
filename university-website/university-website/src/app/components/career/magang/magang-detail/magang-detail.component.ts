import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { LowonganService } from '../../../../services/lowongan.service';
import { Lowongan } from '../../../../models/lowongan.model';

@Component({
  selector: 'app-magang-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './magang-detail.component.html',
  styleUrl: './magang-detail.component.css',
})
export class MagangDetailComponent implements OnInit {
  // data utama dari backend (1 program magang)
  magang?: Lowongan | any;
  loading = true;
  errorMessage = '';

  // judul section yang bisa kamu edit di HTML
  tataCaraPendaftaranTitle = 'Tata Cara Pendaftaran';
  infoPendaftaranTitle = 'Informasi Pendaftaran';
  kontakTitle = 'Kontak & Informasi Tambahan';

  constructor(
    private route: ActivatedRoute,
    private lowonganService: LowonganService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (!idParam) {
      this.errorMessage = 'ID magang tidak ditemukan di URL.';
      this.loading = false;
      return;
    }

    const id = Number(idParam);

    // ambil data 1 magang (lowongan tipe Magang) dari service
    this.lowonganService.getAll().subscribe({
      next: (list: Lowongan[]) => {
        const found = list
          .filter((job) => job.tipePekerjaan === 'Magang')
          .find((job: Lowongan) => job.lowonganId === id); // <== pakai lowonganId

        if (found) {
          this.magang = found;
        } else {
          this.errorMessage = 'Program magang tidak ditemukan.';
        }

        this.loading = false;
      },
      error: (err: any) => {
        console.error('Gagal memuat detail magang', err);
        this.errorMessage = 'Gagal memuat detail magang.';
        this.loading = false;
      },
    });
  }

  // helper untuk judul yang aman
  get judulTampil(): string {
    return (
      this.magang?.judulLowongan ||
      this.magang?.judul ||
      this.magang?.posisi ||
      'Detail Program Magang'
    );
  }
}
