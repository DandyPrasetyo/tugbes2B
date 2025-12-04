import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
})
export class DashboardAdminComponent {
  // objek untuk menampung statistik dari backend
  stats = {
    totalLowongan: 0,
    totalPerusahaan: 0,
    totalAdmin: 0,
  };

  // SESUAIKAN dengan endpoint statistik di Spring Boot kamu
  private apiUrl = 'http://localhost:8080/api/statistik';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(this.apiUrl).subscribe({
      next: (data) => {
        this.stats = data; // misal { totalLowongan: 5, totalPerusahaan: 3, totalAdmin: 1 }
      },
      error: (err) => {
        console.error('Gagal load statistik dashboard', err);
      },
    });
  }
}
