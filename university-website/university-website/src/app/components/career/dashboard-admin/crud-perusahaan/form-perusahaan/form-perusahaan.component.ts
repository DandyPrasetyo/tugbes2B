import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PerusahaanService } from '@services/perusahaan.service';
import { Perusahaan } from '@models/perusahaan.model';

@Component({
  selector: 'app-form-perusahaan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-perusahaan.component.html',
  styleUrls: ['./form-perusahaan.component.css'],
})
export class FormPerusahaanComponent implements OnInit {
  perusahaan: Perusahaan = {
    nama_perusahaan: '',
    alamat: '',
    email: '',
    no_telp: '',
    deskripsi: '',
    website: '',
  };

  isEdit = false;
  id: number = 0;

  constructor(
    private perusahaanService: PerusahaanService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    this.id = param ? Number(param) : 0;

    if (this.id) {
      this.isEdit = true;
      this.loadDetail();
    }
  }

  loadDetail(): void {
    this.perusahaanService.getById(this.id).subscribe({
      next: (res) => {
        this.perusahaan = res;
      },
      error: (err) => {
        console.error('Gagal memuat detail perusahaan:', err);
        alert('Gagal memuat data perusahaan');
        this.router.navigate(['/career/admin/perusahaan']);
      },
    });
  }

  save(): void {
    if (this.isEdit) {
      this.perusahaanService.update(this.id, this.perusahaan).subscribe({
        next: () => {
          alert('Perusahaan berhasil diperbarui');
          this.router.navigate(['/career/admin/perusahaan']);
        },
        error: (err) => {
          console.error('Gagal update perusahaan:', err);
          alert('Gagal update perusahaan');
        },
      });
    } else {
      this.perusahaanService.create(this.perusahaan).subscribe({
        next: () => {
          alert('Perusahaan berhasil ditambahkan');
          this.router.navigate(['/career/admin/perusahaan']);
        },
        error: (err) => {
          console.error('Gagal tambah perusahaan:', err);
          alert('Gagal tambah perusahaan');
        },
      });
    }
  }
}
