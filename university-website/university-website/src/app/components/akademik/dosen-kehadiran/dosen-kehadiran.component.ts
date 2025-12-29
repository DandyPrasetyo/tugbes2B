import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface KehadiranDosen {
  nama: string;
  jabatan: string; // dipakai juga untuk isi Prodi kalau mau
  mataKuliah: string;
  status: 'Hadir' | 'Izin' | 'Sakit';
  tanggal: string;
}

@Component({
  selector: 'app-dosen-kehadiran',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule // ⬅️ WAJIB untuk ngModel (sudah benar)
  ],
  templateUrl: './dosen-kehadiran.component.html',
  styleUrls: ['./dosen-kehadiran.component.css'],
})
export class DosenKehadiranComponent {

  // ================= FILTER =================
  searchNama: string = '';
  selectedStatus: '' | 'Hadir' | 'Izin' | 'Sakit' = '';

  // ================= FORM ABSEN (TAMBAHAN) =================
  formNama: string = '';
  formJabatan: string = '';      // di UI nanti bisa diberi placeholder "Masukan Prodi"
  formMataKuliah: string = '';
  formStatus: 'Hadir' | 'Izin' | 'Sakit' = 'Hadir';
  formTanggal: string = new Date().toISOString().slice(0, 10); // yyyy-mm-dd

  // ================= DATA DOSEN (TANPA DUMMY) =================
  // dipakai di template
  dataKehadiran: KehadiranDosen[] = [];

  // ================= HASIL FILTER =================
  hasil: KehadiranDosen[] = [...this.dataKehadiran];

  // ================== KONSTRUKTOR (LOAD HARIAN) ==================
  constructor() {
    this.loadFromStorage();
  }

  // ===== Helper aman untuk SSR =====
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  private getTodayKey(): string {
    return new Date().toISOString().slice(0, 10); // yyyy-mm-dd
  }

  private loadFromStorage() {
    if (!this.isBrowser()) {
      // kalau dirender di server, jangan sentuh localStorage
      this.dataKehadiran = [];
      this.hasil = [...this.dataKehadiran];
      return;
    }

    const today = this.getTodayKey();
    const savedDate = localStorage.getItem('kehadiranTanggal');
    const savedData = localStorage.getItem('kehadiranData');

    if (savedDate === today && savedData) {
      // pakai data yang tersimpan untuk hari ini
      this.dataKehadiran = JSON.parse(savedData) as KehadiranDosen[];
    } else {
      // hari baru: kosongkan, semua dosen harus absen lagi
      this.dataKehadiran = [];
      localStorage.setItem('kehadiranTanggal', today);
      localStorage.removeItem('kehadiranData');
    }

    this.hasil = [...this.dataKehadiran];
  }

  private saveToStorage() {
    if (!this.isBrowser()) return;
    localStorage.setItem('kehadiranTanggal', this.getTodayKey());
    localStorage.setItem('kehadiranData', JSON.stringify(this.dataKehadiran));
  }

  // ================= SEARCH =================
  search() {
    const keyword = this.searchNama.toLowerCase().trim();

    this.hasil = this.dataKehadiran.filter(d =>
      (!keyword || d.nama.toLowerCase().includes(keyword)) &&
      (!this.selectedStatus || d.status === this.selectedStatus)
    );
  }

  // ✅ RESET PENCARIAN
  resetSearch() {
    this.searchNama = '';
    this.selectedStatus = '';
    this.hasil = [...this.dataKehadiran];
  }

  // ✅ HAPUS SATU DATA KEHADIRAN (PANGGIL DARI HTML: (click)="deleteKehadiran(i)")
  deleteKehadiran(index: number) {
    this.dataKehadiran.splice(index, 1);
    this.hasil = [...this.dataKehadiran];
    this.saveToStorage();
  }

  // ✅ HAPUS SEMUA DATA HARI INI (OPSIONAL, TOMBOL TERPISAH)
  clearAllToday() {
    if (!confirm('Hapus semua data kehadiran hari ini?')) return;
    this.dataKehadiran = [];
    this.hasil = [];
    this.saveToStorage();
  }

  // ================= ABSEN (TAMBAHAN) =================
  absen() {
    if (!this.formNama.trim() || !this.formJabatan.trim() || !this.formMataKuliah.trim()) {
      alert('Nama, jabatan/prodi, dan mata kuliah wajib diisi.');
      return;
    }

    const baru: KehadiranDosen = {
      nama: this.formNama.trim(),
      jabatan: this.formJabatan.trim(),       // diisi Prodi atau Prodi + jabatan
      mataKuliah: this.formMataKuliah.trim(),
      status: this.formStatus,
      tanggal: this.formTanggal,
    };

    // tambah ke data utama
    this.dataKehadiran.unshift(baru);

    // simpan ke localStorage supaya tidak hilang kalau refresh di hari yang sama
    this.saveToStorage();

    // refresh hasil sesuai filter yang sedang aktif
    this.search();

    // reset form (kecuali tanggal kalau mau tetap hari ini)
    this.formNama = '';
    this.formJabatan = '';
    this.formMataKuliah = '';
    this.formStatus = 'Hadir';
  }
}
