import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
})
export class DashboardAdminComponent {
  // objek statistik dari backend
  stats = {
    totalLowongan: 0,
    totalPerusahaan: 0,
    totalAdmin: 0,
  };

  // endpoint statistik di Spring Boot
  private apiUrl = 'http://localhost:8080/api/statistik';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe({
      next: (data) => {
        this.stats = data; // { totalLowongan, totalPerusahaan, totalAdmin }
      },
      error: (err) => {
        console.error('Gagal load statistik dashboard', err);
      },
    });
  }

  onLogout(): void {
    this.authService.logout(); // hapus token & redirect ke /career/login
  }
}
