import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // <--- TAMBAHAN

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  search = '';
  filterKategori = '';
  filterTanggal = '';
  filterLokasi = '';

  // beri id + deskripsi supaya detail bisa menampilkan info lengkap poster
  events = [
    {
      id: 1,
      judul: 'Seminar Persiapan Karir 2025',
      kategori: 'Seminar',
      tanggal: '2025-11-20',
      lokasi: 'Polinema',
      banner: 'assets/img/event1.jpg',
      deskripsi:
        'Seminar persiapan karir untuk mahasiswa tingkat akhir dan fresh graduate.',
    },
    {
      id: 2,
      judul: 'Workshop UI/UX Design',
      kategori: 'Workshop',
      tanggal: '2025-11-18',
      lokasi: 'Online',
      banner: 'assets/img/event2.jpg',
      deskripsi:
        'Workshop intensif tentang prinsip dan praktik UI/UX design untuk pemula.',
    },
    {
      id: 3,
      judul: 'Polinema Job Fair 2025',
      kategori: 'Job Fair',
      tanggal: '2025-12-05',
      lokasi: 'Polinema',
      banner: 'assets/img/event3.jpg',
      deskripsi:
        'Job fair yang menghadirkan berbagai perusahaan mitra Polinema untuk rekrutmen langsung.',
    },
    {
      id: 4,
      judul: 'Career Coaching Intensif',
      kategori: 'Career Coaching',
      tanggal: '2025-11-22',
      lokasi: 'Surabaya',
      banner: 'assets/img/event2.jpg',
      deskripsi:
        'Sesi coaching karir intensif dengan mentor profesional untuk persiapan dunia kerja.',
    },
    {
      id: 5,
      judul: 'Seminar Soft Skill Mahasiswa',
      kategori: 'Seminar',
      tanggal: '2025-12-01',
      lokasi: 'Jakarta',
      banner: 'assets/img/event1.jpg',
      deskripsi:
        'Seminar pengembangan soft skill penting bagi mahasiswa dan lulusan baru.',
    },
  ];

  constructor(private router: Router) {} // <--- TAMBAHAN

  // ✅ logika filter TIDAK diubah
  get filteredEvents() {
    return this.events.filter((ev) => {
      const judul = ev.judul ?? '';
      const kategori = ev.kategori ?? '';
      const lokasi = ev.lokasi ?? '';
      const tanggal = ev.tanggal ?? '';

      return (
        judul.toLowerCase().includes(this.search.toLowerCase()) &&
        (this.filterKategori ? kategori === this.filterKategori : true) &&
        (this.filterLokasi ? lokasi === this.filterLokasi : true) &&
        (this.filterTanggal ? tanggal === this.filterTanggal : true)
      );
    });
  }

  // 🔥 TAMBAHAN: klik "Lihat Detail" pindah ke halaman detail + bawa data poster & deskripsi
  lihatDetail(ev: any) {
    this.router.navigate(['/career/event', ev.id], {
      state: { data: ev },
    });
  }
}
