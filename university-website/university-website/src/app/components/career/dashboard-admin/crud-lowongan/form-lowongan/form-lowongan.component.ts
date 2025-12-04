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
  // pakai struktur sesuai LowonganRequest + response backend
lowongan: any = {
  adminId: 1,
  perusahaanId: 2,   // ini default perusahaanId yang valid
  judulLowongan: '',
  posisi: '',
  deskripsi: '',
  flayer: null,
  tipePekerjaan: 'Full_time',
  gaji: null,
  batasTanggal: '',
  status: 'Aktif',
};


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

  loadDetail() {
    this.lowonganService.getById(this.id).subscribe((res) => {
      this.lowongan = res;
      // tambahkan adminId / perusahaanId default jika perlu
      if (!this.lowongan.adminId) this.lowongan.adminId = 1;
    });
  }

  save() {
    console.log('SAVE DIPANGGIL', this.lowongan);

    if (this.isEdit) {
      this.lowonganService.update(this.id, this.lowongan).subscribe({
        next: () => {
          alert('Lowongan berhasil diperbarui');
          this.router.navigate(['/career/admin/lowongan']);
        },
        error: (err) => {
          alert('Gagal update lowongan');
          console.error('Error update lowongan:', err);
        },
      });
    } else {
      this.lowonganService.create(this.lowongan).subscribe({
        next: () => {
          alert('Lowongan berhasil ditambahkan');
          this.router.navigate(['/career/admin/lowongan']);
        },
        error: (err) => {
          alert('Gagal tambah lowongan');
          console.error('Error create lowongan:', err);
        },
      });
    }
  }
}
