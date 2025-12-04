import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LowonganService } from '@services/lowongan.service';

@Component({
  selector: 'app-list-lowongan',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-lowongan.component.html',
  styleUrls: ['./list-lowongan.component.css'],
})
export class ListLowonganComponent implements OnInit {
  lowonganList: any[] = [];
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

  deleteLowongan(id: number) {
    if (!confirm('Yakin ingin menghapus lowongan ini?')) return;

    this.lowonganService.delete(id).subscribe({
      next: () => {
        this.lowonganList = this.lowonganList.filter(item => item.lowonganId !== id);
      },
      error: (err) => {
        console.error('Gagal menghapus lowongan:', err);
      },
    });
  }
}
