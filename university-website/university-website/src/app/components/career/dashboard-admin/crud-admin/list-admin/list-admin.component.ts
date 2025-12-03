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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadAdmin();
  }

  loadAdmin() {
    this.authService.getAll().subscribe({
      next: (res) => {
        this.adminList = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Gagal memuat admin:', err);
        this.loading = false;
      },
    });
  }

  deleteAdmin(id: number | undefined) {
    if (!id) return;
    if (!confirm('Yakin ingin menghapus admin ini?')) return;

    this.authService.delete(id).subscribe({
      next: () => {
        this.adminList = this.adminList.filter((a) => a.admin_id !== id);
      },
    });
  }
}
