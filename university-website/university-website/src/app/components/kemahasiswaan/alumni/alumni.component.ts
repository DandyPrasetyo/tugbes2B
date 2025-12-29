import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Alumni {
  id: number;
  nama: string;
  nim: string;
  prodi: string;
  tahunLulus: string;
  foto: string;
}

@Component({
  selector: 'app-alumni',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css'],
})
export class AlumniComponent {
  allAlumni: Alumni[] = [
    { id: 1, nama: 'Andi Saputra', nim: '2141720001', prodi: 'D4 Teknologi Informasi', tahunLulus: '2020', foto: 'assets/img/alumni/alumni1.jpg' },
    { id: 2, nama: 'Budi Santoso', nim: '2141720002', prodi: 'D4 Teknologi Informasi', tahunLulus: '2020', foto: 'assets/img/alumni/alumni2.jpg' },
    { id: 3, nama: 'Citra Lestari', nim: '2141720003', prodi: 'D3 Manajemen Informatika', tahunLulus: '2020', foto: 'assets/img/alumni/alumni3.jpg' },
    { id: 4, nama: 'Dewi Ayu', nim: '2141720004', prodi: 'D3 Manajemen Informatika', tahunLulus: '2020', foto: 'assets/img/alumni/alumni4.jpg' },
    { id: 5, nama: 'Eko Prasetyo', nim: '2141720005', prodi: 'D4 Teknik Informatika', tahunLulus: '2021', foto: 'assets/img/alumni/alumni5.jpg' },
    { id: 6, nama: 'Fajar Hidayat', nim: '2141720006', prodi: 'D4 Teknik Informatika', tahunLulus: '2021', foto: 'assets/img/alumni/alumni6.jpg' },
    { id: 7, nama: 'Gita Laras', nim: '2141720007', prodi: 'D4 Sistem Informasi Bisnis', tahunLulus: '2021', foto: 'assets/img/alumni/alumni7.jpg' },
    { id: 8, nama: 'Hana Wijaya', nim: '2141720008', prodi: 'D4 Sistem Informasi Bisnis', tahunLulus: '2021', foto: 'assets/img/alumni/alumni8.jpg' },
    { id: 9, nama: 'Indra Putra', nim: '2141720009', prodi: 'D3 Teknik Komputer', tahunLulus: '2021', foto: 'assets/img/alumni/alumni9.jpg' },
    { id: 10, nama: 'Joko Rudi', nim: '2141720010', prodi: 'D3 Teknik Komputer', tahunLulus: '2022', foto: 'assets/img/alumni/alumni10.jpg' },
    { id: 11, nama: 'Kartika Sari', nim: '2141720011', prodi: 'D4 Teknologi Informasi', tahunLulus: '2022', foto: 'assets/img/alumni/alumni11.jpg' },
    { id: 12, nama: 'Lala Nandita', nim: '2141720012', prodi: 'D4 Teknologi Informasi', tahunLulus: '2022', foto: 'assets/img/alumni/alumni12.jpg' },
    { id: 13, nama: 'Miko Aditya', nim: '2141720013', prodi: 'D3 Manajemen Informatika', tahunLulus: '2022', foto: 'assets/img/alumni/alumni13.jpg' },
    { id: 14, nama: 'Nina Pramudita', nim: '2141720014', prodi: 'D3 Manajemen Informatika', tahunLulus: '2023', foto: 'assets/img/alumni/alumni14.jpg' },
    { id: 15, nama: 'Oka Pradana', nim: '2141720015', prodi: 'D4 Teknik Informatika', tahunLulus: '2023', foto: 'assets/img/alumni/alumni15.jpg' },
    { id: 16, nama: 'Putri Melati', nim: '2141720016', prodi: 'D4 Teknik Informatika', tahunLulus: '2023', foto: 'assets/img/alumni/alumni16.jpg' },
    { id: 17, nama: 'Rama Dwi', nim: '2141720017', prodi: 'D4 Sistem Informasi Bisnis', tahunLulus: '2023', foto: 'assets/img/alumni/alumni17.jpg' },
    { id: 18, nama: 'Sari Anggraini', nim: '2141720018', prodi: 'D4 Sistem Informasi Bisnis', tahunLulus: '2023', foto: 'assets/img/alumni/alumni18.jpg' },
  ];

  pageSize = 9;
  currentPage = 1;

  filterNama = '';
  filterNim = '';
  filterProdi = '';
  filterTahun = '';

  searchResult: Alumni | null = null;

  get totalPages(): number {
    return Math.ceil(this.allAlumni.length / this.pageSize);
  }

  get pagedAlumni(): Alumni[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.allAlumni.slice(start, start + this.pageSize);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.searchResult = null;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.searchResult = null;
    }
  }

  onSearch(): void {
    const nama = this.filterNama.trim().toLowerCase();
    const nim = this.filterNim.trim().toLowerCase();
    const prodi = this.filterProdi.trim().toLowerCase();
    const tahun = this.filterTahun.trim().toLowerCase();

    const found = this.allAlumni.find((a) => {
      const matchNama = !nama || a.nama.toLowerCase().includes(nama);
      const matchNim = !nim || a.nim.toLowerCase().includes(nim);
      const matchProdi = !prodi || a.prodi.toLowerCase().includes(prodi);
      const matchTahun = !tahun || a.tahunLulus.toLowerCase().includes(tahun);
      return matchNama && matchNim && matchProdi && matchTahun;
    });

    this.searchResult = found ?? null;
  }

  clearSearch(): void {
    this.searchResult = null;
    this.filterNama = '';
    this.filterNim = '';
    this.filterProdi = '';
    this.filterTahun = '';
  }
}
