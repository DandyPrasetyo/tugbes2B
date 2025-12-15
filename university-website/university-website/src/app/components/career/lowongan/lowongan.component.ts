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
        if (data && data.length) {
          this.lowongan = data
            .filter((job) => job.tipePekerjaan !== 'Magang')
            .map((job) => ({
              judul: job.judulLowongan,
              posisi: job.posisi,
              judulLowongan: job.judulLowongan,
              perusahaan: job.perusahaanId,
              lokasi: job.lokasi,
              deskripsi: job.deskripsi,
              tipe:
                job.tipePekerjaan === 'Full_time'
                  ? 'Fulltime'
                  : job.tipePekerjaan === 'Part_time'
                  ? 'Parttime'
                  : job.tipePekerjaan,
              posted: job.createdAt,
              deadline: job.batasTanggal,
              status: job.status === 'Aktif' ? 'Tersedia' : 'Ditutup',
              flayer: job.flayer,
              lowonganId:
                (job as any).lowonganId ?? (job as any).lowongan_id,
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

  // ✅ DIPERBAIKI DI SINI (AGAR TIDAK CRASH)
  get filteredLowongan() {
    return this.lowongan.filter((job) => {
      const posisi = job.posisi ?? '';
      const lokasi = job.lokasi ?? '';
      const tipe = job.tipe ?? '';
      const status = job.status ?? '';

      return (
        posisi.toLowerCase().includes(this.search.toLowerCase()) &&
        (this.filterLokasi ? lokasi === this.filterLokasi : true) &&
        (this.filterTipe ? tipe === this.filterTipe : true) &&
        (this.filterStatus ? status === this.filterStatus : true)
      );
    });
  }

  // <--- TAMBAHAN: klik "Lihat Detail" di kartu
  lihatDetail(job: any) {
    if (job.lowonganId || job.lowongan_id || job.id) {
      const id = job.lowonganId || job.lowongan_id || job.id;
      this.router.navigate(['/career/loker', id]);
    } else {
      this.router.navigate(['/career/loker'], {
        state: { data: job },
      });
    }
  }
}
