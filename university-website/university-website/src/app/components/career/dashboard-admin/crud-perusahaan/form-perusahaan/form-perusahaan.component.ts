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
  id!: number;

  constructor(
    private perusahaanService: PerusahaanService,
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
    this.perusahaanService.getById(this.id).subscribe((res) => {
      this.perusahaan = res;
    });
  }

  save() {
    if (this.isEdit) {
      this.perusahaanService.update(this.id, this.perusahaan).subscribe(() => {
        alert('Perusahaan berhasil diperbarui');
        this.router.navigate(['/career/admin/perusahaan']);
      });
    } else {
      this.perusahaanService.create(this.perusahaan).subscribe(() => {
        alert('Perusahaan berhasil ditambahkan');
        this.router.navigate(['/career/admin/perusahaan']);
      });
    }
  }
}
