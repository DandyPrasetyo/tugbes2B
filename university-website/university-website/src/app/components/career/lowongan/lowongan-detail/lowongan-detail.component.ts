import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { LowonganService } from '../../../../services/lowongan.service';
import { Lowongan } from '../../../../models/lowongan.model';


@Component({
  selector: 'app-lowongan-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lowongan-detail.component.html',
  styleUrl: './lowongan-detail.component.css',
})
export class LowonganDetailComponent implements OnInit {
  // data utama dari backend
  lowongan?: Lowongan | any;
  loading = true;
  errorMessage = '';

  // section yang bisa kamu edit di HTML
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
      this.errorMessage = 'ID lowongan tidak ditemukan di URL.';
      this.loading = false;
      return;
    }

    const id = Number(idParam);

    // ambil data 1 lowongan dari service
    // jika lowonganService sudah punya getById, ini akan langsung dipakai
    if (typeof (this.lowonganService as any).getById === 'function') {
      (this.lowonganService as any).getById(id).subscribe({
        next: (data: Lowongan) => {
          this.lowongan = data;
          this.loading = false;
        },
        error: (err: any) => {
          console.error('Gagal memuat detail lowongan', err);
          this.errorMessage = 'Gagal memuat detail lowongan.';
          this.loading = false;
        },
      });
    } else {
      // fallback: kalau belum ada getById, ambil semua lalu cari berdasarkan id
      this.lowonganService.getAll().subscribe({
        next: (list: Lowongan[]) => {
          const found = list.find((job: any) => {
            const jobId = job.lowonganId ?? job.lowongan_id ?? job.id;
            return Number(jobId) === id;
          });

          if (found) {
            this.lowongan = found;
          } else {
            this.errorMessage = 'Lowongan tidak ditemukan.';
          }

          this.loading = false;
        },
        error: (err: any) => {
          console.error('Gagal memuat detail lowongan', err);
          this.errorMessage = 'Gagal memuat detail lowongan.';
          this.loading = false;
        },
      });
    }
  }

  // helper untuk judul yang aman
  get judulTampil(): string {
    return (
      this.lowongan?.judulLowongan ||
      this.lowongan?.judul ||
      this.lowongan?.posisi ||
      'Detail Lowongan'
    );
  }
}
