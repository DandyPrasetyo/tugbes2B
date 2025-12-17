import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LowonganService } from '@services/lowongan.service';
// TAMBAHAN: service & model perusahaan
import { PerusahaanService } from '@services/perusahaan.service';
import { Perusahaan } from '@models/perusahaan.model';

@Component({
  selector: 'app-form-lowongan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-lowongan.component.html',
  styleUrls: ['./form-lowongan.component.css'],
})
export class FormLowonganComponent implements OnInit {
  // struktur sesuai LowonganRequest + response backend
  lowongan: any = {
    adminId: 1,
    perusahaanId: 2, // default perusahaanId yang valid (backend tetap butuh)
    judulLowongan: '',
    posisi: '',
    deskripsi: '',
    flayer: null, // path/URL poster dari backend
    tipePekerjaan: 'Full_time',
    gaji: null,
    batasTanggal: '',
    status: 'Aktif',
    lokasi: '', // opsional: kalau mau diisi dari form
    namaPerusahaan: '', // TAMBAHAN: teks perusahaan bebas dari form
  };

  // file poster yang dipilih user
  posterFile?: File;

  isEdit = false;
  id!: number;

  // TAMBAHAN: daftar perusahaan untuk dropdown (saat ini tidak dipakai di form)
  perusahaanList: Perusahaan[] = [];

  constructor(
    private lowonganService: LowonganService,
    private route: ActivatedRoute,
    private router: Router,
    private perusahaanService: PerusahaanService // TAMBAHAN
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // TAMBAHAN: load semua perusahaan untuk select (bisa dipakai nanti)
    this.loadPerusahaan();

    if (this.id) {
      this.isEdit = true;
      this.loadDetail();
    }
  }

  // TAMBAHAN: ambil data perusahaan dari backend
  private loadPerusahaan(): void {
    this.perusahaanService.getAll().subscribe({
      next: (data) => {
        this.perusahaanList = data;
      },
      error: (err) => {
        console.error('Gagal memuat daftar perusahaan:', err);
      },
    });
  }

  loadDetail(): void {
    this.lowonganService.getById(this.id).subscribe((res) => {
      this.lowongan = res;
      // tambahkan adminId / perusahaanId default jika perlu
      if (!this.lowongan.adminId) {
        this.lowongan.adminId = 1;
      }

      // 💡 TAMBAHAN: isi perusahaanId dari relasi perusahaan jika ada
      if (!this.lowongan.perusahaanId && this.lowongan.perusahaan?.perusahaanId) {
        this.lowongan.perusahaanId = this.lowongan.perusahaan.perusahaanId;
      } else if (!this.lowongan.perusahaanId) {
        this.lowongan.perusahaanId = 2;
      }

      // pastikan properti namaPerusahaan selalu ada
      if (!this.lowongan.namaPerusahaan) {
        this.lowongan.namaPerusahaan = '';
      }
    });
  }

  // dipanggil saat input file berubah
  onPosterChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.posterFile = input.files[0];
    }
  }

  save(): void {
    console.log('SAVE DIPANGGIL', this.lowongan);

    if (this.isEdit) {
      // MODE EDIT
      if (this.posterFile) {
        // ada poster baru → pakai endpoint multipart
        this.lowonganService
          .updateWithPoster(this.id, this.lowongan, this.posterFile)
          .subscribe({
            next: () => {
              alert('Lowongan berhasil diperbarui (dengan poster baru)');
              this.router.navigate(['/career/admin/lowongan']);
            },
            error: (err: any) => {
              alert('Gagal update lowongan');
              console.error('Error update lowongan (with poster):', err);
            },
          });
      } else {
        // tanpa poster baru → JSON biasa
        this.lowonganService.update(this.id, this.lowongan).subscribe({
          next: () => {
            alert('Lowongan berhasil diperbarui');
            this.router.navigate(['/career/admin/lowongan']);
          },
          error: (err: any) => {
            alert('Gagal update lowongan');
            console.error('Error update lowongan:', err);
          },
        });
      }
    } else {
      // MODE CREATE (boleh dengan/ tanpa poster)
      this.lowonganService
        .create(this.lowongan, this.posterFile)
        .subscribe({
          next: () => {
            alert('Lowongan berhasil ditambahkan');
            this.router.navigate(['/career/admin/lowongan']);
          },
          error: (err: any) => {
            alert('Gagal tambah lowongan');
            console.error('Error create lowongan:', err);
          },
        });
    }
  }
}
