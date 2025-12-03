import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LowonganService } from '@services/lowongan.service';
import { Lowongan } from '@models/lowongan.model';

@Component({
  selector: 'app-list-lowongan',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-lowongan.component.html',
  styleUrls: ['./list-lowongan.component.css'],
})
export class ListLowonganComponent implements OnInit {
  lowonganList: Lowongan[] = [];
  loading = true;

  constructor(private lowonganService: LowonganService) {}

  ngOnInit(): void {
    this.loadLowongan();
  }

  loadLowongan() {
    this.lowonganService.getAll().subscribe({
      next: (res) => {
        this.lowonganList = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Gagal memuat lowongan:', err);
        this.loading = false;
      },
    });
  }

  deleteLowongan(id: number | undefined) {
    if (!id) return;
    if (!confirm('Yakin ingin menghapus lowongan ini?')) return;

    this.lowonganService.delete(id).subscribe(() => {
      this.lowonganList = this.lowonganList.filter(
        (item) => item.lowongan_id !== id
      );
    });
  }
}
