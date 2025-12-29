import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Mahasiswa {
  nama: string;
  prodi: string;
  angkatan: number;
  foto?: string;
  status?: string;
  nim?: string | number;          // <- boleh string atau number
}

@Component({
  selector: 'app-mahasiswa-aktif',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mahasiswa-aktif.component.html',
  styleUrls: ['./mahasiswa-aktif.component.css'],
})
export class MahasiswaAktifComponent {

  // ================= INPUT FILTER =================
  searchNama: string = '';
  selectedProdi: string = '';
  selectedAngkatan: number | '' = '';

  // ================= DROPDOWN DATA =================
  prodiList: string[] = [
    'D3 Akuntansi',
    'D3 Teknologi Informasi',
    'D4 Teknologi Rekayasa Otomotif',
    'D3 Teknologi Sipil',
  ];

  angkatanList: number[] = [
    2020, 2021, 2022, 2023, 2024, 2025
  ];

  // logo polinema (dipakai di HTML)
  logoPolinema: string = 'assets/img/logo.png';

  // ================= DATA MAHASISWA =================
  mahasiswa: Mahasiswa[] = [
    {
      nama: 'Dandy Prasetyo',
      prodi: 'D3 Teknologi Informasi',
      angkatan: 2022,
      foto: 'assets/img/mahasiswa/dandy.jpeg',
      status: 'Aktif',
      nim: 243107040047
    },
    {
      nama: 'Amanda Putri',
      prodi: 'D3 Akuntansi',
      angkatan: 2023,
      foto: 'assets/img/mahasiswa/amanda.jpg',
      status: 'Aktif',
      nim: 'XXXXXXXXXXXX'
    },
    {
      nama: 'Rizky Ramadhan',
      prodi: 'D4 Teknologi Rekayasa Otomotif',
      angkatan: 2021,
      foto: 'assets/img/mahasiswa/rizky.jpg',
      status: 'Aktif',
      nim: 'XXXXXXXXXXXX'
    },
    {
      nama: 'Fahri Maulana',
      prodi: 'D3 Teknologi Sipil',
      angkatan: 2020,
      foto: 'assets/img/mahasiswa/fahri.jpg',
      status: 'Tidak Aktif',
      nim: 'XXXXXXXXXXXX'
    },
    {
      nama: 'Siti Aisyah',
      prodi: 'D3 Teknologi Informasi',
      angkatan: 2024,
      foto: 'assets/img/mahasiswa/siti.jpg',
      status: 'Aktif',
      nim: 'XXXXXXXXXXXX'
    },
  ];

  // ================= HASIL FILTER =================
  hasil: Mahasiswa[] = this.mahasiswa;

  // ================= PAGINATION =================
  currentPage: number = 1;
  itemsPerPage: number = 10;          // 10 data per halaman
  totalPages: number = 1;
  mahasiswaPerHalaman: Mahasiswa[] = [];
  isSearched: boolean = false;

  constructor() {
    // ===== TAMBAHAN: GENERATE DATA DUMMY (AGAR ADA BANYAK HALAMAN) =====
    for (let i = 1; i <= 30; i++) {
      this.mahasiswa.push({
        nama: `Mahasiswa ${i}`,
        prodi: this.prodiList[i % this.prodiList.length],
        angkatan: 2020 + (i % 6),
        foto: 'assets/img/mahasiswa/default.png',
        // contoh: ganjil Aktif, genap Tidak Aktif
        status: i % 2 === 0 ? 'Tidak Aktif' : 'Aktif',
        nim: `NIM${i.toString().padStart(4, '0')}`
      });
    }

    this.hasil = this.mahasiswa;
    this.totalPages = Math.ceil(this.hasil.length / this.itemsPerPage);
    this.updatePagination();
  }

  // ================= SEARCH =================
  search() {
    this.isSearched = true;
    this.currentPage = 1;

    const keyword = this.searchNama.toLowerCase().trim();

    this.hasil = this.mahasiswa.filter(m =>
      (!keyword || m.nama.toLowerCase().includes(keyword)) &&
      (!this.selectedProdi || m.prodi === this.selectedProdi) &&
      (!this.selectedAngkatan || m.angkatan === Number(this.selectedAngkatan))
    );

    this.totalPages = Math.ceil(this.hasil.length / this.itemsPerPage);
    this.updatePagination();
  }

  // ================= UPDATE PAGE =================
  updatePagination() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.mahasiswaPerHalaman = this.hasil.slice(start, end);
  }

  // ================= NEXT PAGE =================
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  // ================= PREVIOUS PAGE =================
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }
}
