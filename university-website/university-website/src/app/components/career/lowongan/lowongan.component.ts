import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LowonganService } from '../../../services/lowongan.service';
import { Lowongan } from '../../../models/lowongan.model';
import { Router } from '@angular/router'; // <--- TAMBAHAN

@Component({
  selector: 'app-loker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lowongan.component.html',
  styleUrls: ['./lowongan.component.css'],
})
export class LowonganComponent implements OnInit {
  search = '';
  filterLokasi = '';
  filterTipe = '';
  filterStatus = '';

  posterBaseUrl = 'http://localhost:8080/';

  // DATA DUMMY LAMA (dipakai jika API gagal)
  lowongan: any[] = [
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

  constructor(
    private lowonganService: LowonganService,
    private router: Router // <--- TAMBAHAN
  ) {}

  ngOnInit(): void {
    this.lowonganService.getAll().subscribe({
      next: (data: Lowongan[]) => {
        // <-- pakai tipe Lowongan
        if (data && data.length) {
          // hanya lowongan NON-MAGANG yang tampil di menu Loker
          this.lowongan = data
            .filter((job) => job.tipePekerjaan !== 'Magang')
            .map((job) => ({
              // mapping ke struktur yang sudah dipakai di template & filter
              judul: job.judulLowongan, // <-- judul lowongan (kolom Judul Lowongan)
              posisi: job.posisi, // <-- kolom Posisi
              judulLowongan: job.judulLowongan,
              perusahaan: job.perusahaanId, // ganti nanti kalau sudah ambil nama perusahaan
              lokasi: job.lokasi, // <-- ambil lokasi dari backend
              deskripsi: job.deskripsi, // <-- tambahan: deskripsi dari backend
              tipe:
                job.tipePekerjaan === 'Full_time'
                  ? 'Fulltime'
                  : job.tipePekerjaan === 'Part_time'
                  ? 'Parttime'
                  : job.tipePekerjaan,
              posted: job.createdAt,
              deadline: job.batasTanggal,
              status: job.status === 'Aktif' ? 'Tersedia' : 'Ditutup',
              flayer: job.flayer, // supaya bisa dipakai di HTML
              lowonganId: (job as any).lowonganId ?? (job as any).lowongan_id, // <--- TAMBAHAN kecil untuk id kalau ada
            }));
        }
      },
      error: (err) => {
        console.error(
          'Gagal load data lowongan dari API, pakai data dummy',
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

  // <--- TAMBAHAN: klik "Lihat Detail" di kartu
  lihatDetail(job: any) {
    if (job.lowonganId || job.lowongan_id || job.id) {
      const id = job.lowonganId || job.lowongan_id || job.id;
      // sesuaikan dengan route: /career/loker/:id
      this.router.navigate(['/career/loker', id]);
    } else {
      // kalau suatu saat mau pakai state ke halaman lain, route fallback bisa disesuaikan
      this.router.navigate(['/career/loker'], {
        state: { data: job },
      });
    }
  }
}
