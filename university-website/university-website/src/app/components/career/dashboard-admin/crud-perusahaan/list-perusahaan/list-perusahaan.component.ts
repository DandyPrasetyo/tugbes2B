import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LowonganService } from '@services/lowongan.service';
import { Lowongan } from '@models/lowongan.model';

import { PerusahaanService } from '@services/perusahaan.service';
import { Perusahaan } from '@models/perusahaan.model';

@Component({
  selector: 'app-list-perusahaan',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-perusahaan.component.html',
  styleUrls: ['./list-perusahaan.component.css'],
})
export class ListPerusahaanComponent implements OnInit {
  perusahaanList: Perusahaan[] = [];
  loading = true;

  constructor(private perusahaanService: PerusahaanService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.perusahaanService.getAll().subscribe({
      next: (res) => {
        this.perusahaanList = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Gagal memuat perusahaan:', err);
        this.loading = false;
      },
    });
  }

  delete(id?: number) {
    if (!id) return;

    if (!confirm('Yakin ingin menghapus perusahaan ini?')) return;

    this.perusahaanService.delete(id).subscribe(() => {
      this.perusahaanList = this.perusahaanList.filter(
        (item) => item.perusahaan_id !== id
      );
    });
  }
}
