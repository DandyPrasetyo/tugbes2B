import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LowonganService } from '../../../services/lowongan.service';
import { Lowongan } from '../../../models/lowongan.model';
import { Router } from '@angular/router'; // <--- TAMBAHAN

@Component({
  selector: 'app-magang',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './magang.component.html',
  styleUrls: ['./magang.component.css'],
})
export class MagangComponent implements OnInit {
  search = '';
  filterLokasi = '';
  filterDurasi = '';

  posterBaseUrl = 'http://localhost:8080/';

  // default dummy, dipakai kalau API gagal
  magang: any[] = [
    {
      posisi: 'Magang Engineering & IT',
      perusahaan: 'PT Astra Otoparts',
      lokasi: 'Jakarta',
      durasi: '3 Bulan',
      posted: '12 Nov 2025',
      deadline: '25 Nov 2025',
      status: 'Tersedia',
      image: 'assets/img/magang/magang1.jpg',
    },
    {
      posisi: 'Magang Karyawan',
      perusahaan: 'PT Surya Multi Indopack',
      lokasi: 'Surabaya',
      durasi: '2 Bulan',
      posted: '11 Nov 2025',
      deadline: '28 Nov 2025',
      status: 'Tersedia',
      image: 'assets/img/magang/magang2.jpg',
    },
    {
      posisi: 'Magang BUMN',
      perusahaan: 'PT Pelindo',
      lokasi: 'Malang',
      durasi: '6 Bulan',
      posted: '05 Nov 2025',
      deadline: '20 Nov 2025',
      status: 'Ditutup',
      image: 'assets/img/magang/magang3.jpg',
    },
  ];

  constructor(
    private lowonganService: LowonganService,
    private router: Router // <--- TAMBAHAN
  ) {}

  ngOnInit(): void {
    this.lowonganService.getAll().subscribe({
      next: (data: Lowongan[]) => {
        if (data && data.length) {
          // mapping hanya lowongan dengan tipe Magang
          this.magang = data
            .filter((job) => job.tipePekerjaan === 'Magang')
            .map((job: any) => ({
              // pakai any supaya boleh baca job.id walaupun tidak ada di interface Lowongan
              id: job.id,                                    // <-- id untuk routing
              judul: job.judulLowongan,                     // <-- judul lowongan (MNCTV)
              posisi: job.posisi,                           // <-- kolom Posisi (ACTOR)
              perusahaan:
                job.perusahaan?.nama_perusahaan || 'Perusahaan',
              // pakai lokasi entity dulu, lalu fallback ke alamat perusahaan
              lokasi:
                job.lokasi ||
                job.perusahaan?.alamat ||
                'Lokasi tidak ada',
              deskripsi: job.deskripsi,                     // <-- tambahan deskripsi
              tipe: job.tipePekerjaan,                      // <-- simpan tipe pekerjaan
              durasi: 'Magang',                             // bisa diganti jika ada field durasi di backend
              posted: job.createdAt || '-',
              deadline: job.batasTanggal || '-',
              status: job.status === 'Aktif' ? 'Tersedia' : 'Ditutup',
              image: job.flayer ? this.posterBaseUrl + job.flayer : null,
            }));
        }
      },
      error: (err) => {
        console.error('Gagal load magang dari API, pakai data dummy', err);
      },
    });
  }

  get filteredMagang() {
    return this.magang.filter((item) => {
      return (
        item.posisi.toLowerCase().includes(this.search.toLowerCase()) &&
        (this.filterLokasi ? item.lokasi === this.filterLokasi : true) &&
        (this.filterDurasi ? item.durasi === this.filterDurasi : true)
      );
    });
  }

  // === TAMBAHAN: klik "Lihat Detail" untuk pindah halaman ===
  lihatDetail(item: any) {
    if (item.id) {
      this.router.navigate(['/career/magang', item.id]); // [web:22][web:23]
    } else {
      console.warn('Item magang belum punya id, detail belum bisa dibuka');
    }
  }
}
