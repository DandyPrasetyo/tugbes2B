import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';           // <— tambah ini
import { LowonganService } from '@services/lowongan.service';

@Component({
  selector: 'app-list-lowongan',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],      // <— dan ini
  templateUrl: './list-lowongan.component.html',
  styleUrls: ['./list-lowongan.component.css'],
})
export class ListLowonganComponent implements OnInit {
  lowonganList: any[] = [];
  filteredList: any[] = [];
  loading = true;

  // filter state (form di atas tabel)
  judulFilter = '';
  posisiFilter = '';
  tipeFilter = '';           // '', 'Part_time', 'Full_time', 'Magang'
  lokasiFilter = '';         // <-- tambahan lokasi

  // info hasil
  hasilCount = 0;            // X hasil
  totalLowongan = 0;         // Y total

  constructor(private lowonganService: LowonganService) {}

  ngOnInit(): void {
    this.loadLowongan();
  }

  loadLowongan() {
    this.lowonganService.getAll().subscribe({
      next: (res) => {
        this.lowonganList = res;
        this.filteredList = res;
        this.totalLowongan = res.length;
        this.hasilCount = res.length;
        this.loading = false;
      },
      error: (err) => {
        console.error('Gagal memuat lowongan:', err);
        this.loading = false;
      },
    });
  }

  // dipanggil saat klik tombol Search
  doSearch(): void {
    const j = this.judulFilter.toLowerCase().trim();
    const p = this.posisiFilter.toLowerCase().trim();
    const t = this.tipeFilter.toLowerCase().trim();
    const l = this.lokasiFilter.toLowerCase().trim();   // <-- tambahan lokasi

    // kalau semua filter kosong, tampilkan semua data
    if (!j && !p && !t && !l) {                         // <-- lokasi ikut dicek
      this.filteredList = this.lowonganList;
      this.hasilCount = this.filteredList.length;
      return;
    }

    this.filteredList = this.lowonganList.filter((row) => {
      const judul   = (row.judulLowongan || '').toLowerCase();
      const posisi  = (row.posisi || '').toLowerCase();
      const tipe    = (row.tipePekerjaan || '').toLowerCase();
      const lokasi  = (row.lokasi || '').toLowerCase(); // <-- tambahan lokasi

      // AND logic per-field, tapi field kosong diabaikan
      if (j && !judul.includes(j))   return false;
      if (p && !posisi.includes(p))  return false;
      if (t && tipe !== t)           return false;
      if (l && !lokasi.includes(l))  return false;      // <-- tambahan lokasi

      return true;
    });

    this.hasilCount = this.filteredList.length;
  }

  // reset semua filter & tampilkan semua data
  resetFilter(): void {
    this.judulFilter = '';
    this.posisiFilter = '';
    this.tipeFilter = '';
    this.lokasiFilter = '';                               // <-- tambahan lokasi
    this.filteredList = this.lowonganList;
    this.hasilCount = this.filteredList.length;
  }

  // highlight untuk dipakai di HTML dengan [innerHTML]
  highlight(text: string): string {
    if (!text) return text;
    const term =
      (this.judulFilter ||
       this.posisiFilter ||
       this.lokasiFilter ||      // <-- tambahan lokasi
       this.tipeFilter).trim();
    if (!term) return text;

    const safe = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${safe})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  deleteLowongan(id: number) {
    if (!confirm('Yakin ingin menghapus lowongan ini?')) return;

    this.lowonganService.delete(id).subscribe({
      next: () => {
        this.lowonganList = this.lowonganList.filter(
          (item) => item.lowonganId !== id
        );
        // setelah delete, apply filter lagi supaya tampilan konsisten
        this.doSearch();
      },
      error: (err) => {
        console.error('Gagal menghapus lowongan:', err);
      },
    });
  }
}
