import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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

  loadData(): void {
    this.perusahaanService.getAll().subscribe({
      next: (data) => {
        this.perusahaanList = data;   // data: Perusahaan[]
        this.loading = false;
      },
      error: (err) => {
        console.error('Gagal memuat perusahaan:', err);
        this.loading = false;
      },
    });
  }

  delete(id?: number): void {
    if (!id) return;
    if (!confirm('Yakin ingin menghapus perusahaan ini?')) return;

    this.perusahaanService.delete(id).subscribe({
      next: () => {
        this.perusahaanList = this.perusahaanList.filter(
          (item) => item.perusahaanId !== id
        );
      },
      error: (err) => {
        console.error('Gagal menghapus perusahaan:', err);
      },
    });
  }
}
