import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LowonganService } from '@services/lowongan.service';
import { Lowongan } from '@models/lowongan.model';

@Component({
  selector: 'app-form-lowongan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-lowongan.component.html',
  styleUrls: ['./form-lowongan.component.css'],
})
export class FormLowonganComponent implements OnInit {
  lowongan: Lowongan = {
    admin_id: 1,
    perusahaan_id: 0,
    judul_lowongan: '',
    posisi: '',
    deskripsi: '',
    tipe_pekerjaan: 'Full-time',
    gaji: 0,
    batas_tanggal: '',
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
    });
  }

  save() {
    if (this.isEdit) {
      this.lowonganService.update(this.id, this.lowongan).subscribe(() => {
        alert('Lowongan berhasil diperbarui');
        this.router.navigate(['/career/admin/lowongan']);
      });
    } else {
      this.lowonganService.create(this.lowongan).subscribe(() => {
        alert('Lowongan berhasil ditambahkan');
        this.router.navigate(['/career/admin/lowongan']);
      });
    }
  }
}
