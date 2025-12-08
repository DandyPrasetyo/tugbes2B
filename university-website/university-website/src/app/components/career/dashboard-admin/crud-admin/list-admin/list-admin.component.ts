import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { AuthService } from '@services/auth.service';
import { Admin } from '@models/admin.model';

@Component({
  selector: 'app-list-admin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css'],
})
export class ListAdminComponent implements OnInit {
  adminList: Admin[] = [];
  loading = true;
  errorMsg = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadAdmin();
  }

  loadAdmin() {
    this.loading = true;
    this.authService.getAll().subscribe({
      next: (res) => {
        console.log('adminList dari server:', res);
        this.adminList = res;        // res: Admin[]
        this.loading = false;
      },
      error: (err) => {
        console.error('Gagal memuat admin:', err);
        this.errorMsg =
          err?.error?.message || 'Gagal memuat data admin.';
        this.loading = false;
      },
    });
  }

  deleteAdmin(id: number | undefined) {
    if (!id) return;
    if (!confirm('Yakin ingin menghapus admin ini?')) return;

    this.authService.delete(id).subscribe({
      next: () => {
        // gunakan adminId (camelCase) sesuai model & JSON
        this.adminList = this.adminList.filter((a) => a.adminId !== id);
      },
      error: (err) => {
        console.error('Gagal menghapus admin:', err);
      },
    });
  }
}
