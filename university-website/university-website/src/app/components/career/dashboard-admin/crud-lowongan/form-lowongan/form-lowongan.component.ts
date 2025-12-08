import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LowonganService } from '@services/lowongan.service';

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
    perusahaanId: 2, // default perusahaanId yang valid
    judulLowongan: '',
    posisi: '',
    deskripsi: '',
    flayer: null, // path/URL poster dari backend
    tipePekerjaan: 'Full_time',
    gaji: null,
    batasTanggal: '',
    status: 'Aktif',
  };

  // file poster yang dipilih user
  posterFile?: File;

  isEdit = false;
  id!: number;

  constructor(
    private lowonganService: LowonganService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.isEdit = true;
      this.loadDetail();
    }
  }

  loadDetail(): void {
    this.lowonganService.getById(this.id).subscribe((res) => {
      this.lowongan = res;
      // tambahkan adminId / perusahaanId default jika perlu
      if (!this.lowongan.adminId) {
        this.lowongan.adminId = 1;
      }
      if (!this.lowongan.perusahaanId) {
        this.lowongan.perusahaanId = 2;
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
