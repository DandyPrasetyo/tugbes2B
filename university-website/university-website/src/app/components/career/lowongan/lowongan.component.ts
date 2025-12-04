import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // <-- TAMBAHAN

@Component({
  selector: 'app-loker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lowongan.component.html',
  styleUrls: ['./lowongan.component.css'],
})
export class LowonganComponent {
  search = '';
  filterLokasi = '';
  filterTipe = '';
  filterStatus = '';

  // DATA DUMMY LAMA (tetap dipakai sebagai default)
  lowongan = [
    {
      posisi: 'Frontend Developer',
      perusahaan: 'PT Astra Digital',
      lokasi: 'Jakarta',
      tipe: 'Fulltime',
      posted: '10 Nov 2025',
      deadline: '25 Nov 2025',
      status: 'Tersedia',
      logo: 'assets/img/loker1.jpg',
    },
    {
      posisi: 'Admin & Marketing Support',
      perusahaan: 'PT Surya Media',
      lokasi: 'Malang',
      tipe: 'Parttime',
      posted: '12 Nov 2025',
      deadline: '30 Nov 2025',
      status: 'Tersedia',
      logo: 'assets/img/loker2.jpg',
    },
    {
      posisi: 'UI/UX Internship',
      perusahaan: 'PT Kreasi Nusantara',
      lokasi: 'Bandung',
      tipe: 'Internship',
      posted: '05 Nov 2025',
      deadline: '20 Nov 2025',
      status: 'Ditutup',
      logo: 'assets/img/loker3.jpg',
    },
    {
      posisi: 'Freelance Content Creator',
      perusahaan: 'PT Media Global',
      lokasi: 'Surabaya',
      tipe: 'Freelance',
      posted: '08 Nov 2025',
      deadline: '22 Nov 2025',
      status: 'Tersedia',
      logo: 'assets/img/loker3.jpg',
    },
  ];

  private apiUrl = 'http://localhost:8080/api/lowongan'; // <-- URL backend

  constructor(private http: HttpClient) {} // <-- INJEK HttpClient

  ngOnInit() {
    // Coba ambil data dari backend, kalau gagal tetap pakai data dummy di atas
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        if (data && data.length) {
          this.lowongan = data;
        }
      },
      error: (err) => {
        console.error(
          'Gagal load data lowongan dari API, pakai dummy saja',
          err
        );
      },
    });
  }

  get filteredLowongan() {
    return this.lowongan.filter((job) => {
      return (
        job.posisi.toLowerCase().includes(this.search.toLowerCase()) &&
        (this.filterLokasi ? job.lokasi === this.filterLokasi : true) &&
        (this.filterTipe ? job.tipe === this.filterTipe : true) &&
        (this.filterStatus ? job.status === this.filterStatus : true)
      );
    });
  }
}
