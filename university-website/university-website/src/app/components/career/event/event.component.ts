import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  events = [
    {
      judul: 'Seminar Persiapan Karir 2025',
      kategori: 'Seminar',
      tanggal: '2025-11-20',
      lokasi: 'Polinema',
      banner: 'assets/img/event1.jpg',
    },
    {
      judul: 'Workshop UI/UX Design',
      kategori: 'Workshop',
      tanggal: '2025-11-18',
      lokasi: 'Online',
      banner: 'assets/img/event2.jpg',
    },
    {
      judul: 'Polinema Job Fair 2025',
      kategori: 'Job Fair',
      tanggal: '2025-12-05',
      lokasi: 'Polinema',
      banner: 'assets/img/event3.jpg',
    },
    {
      judul: 'Career Coaching Intensif',
      kategori: 'Career Coaching',
      tanggal: '2025-11-22',
      lokasi: 'Surabaya',
      banner: 'assets/img/event4.jpg',
    },
    {
      judul: 'Seminar Soft Skill Mahasiswa',
      kategori: 'Seminar',
      tanggal: '2025-12-01',
      lokasi: 'Jakarta',
      banner: 'assets/img/event5.jpg',
    },
  ];

  get filteredEvents() {
    return this.events.filter((ev) => {
      return (
        ev.judul.toLowerCase().includes(this.search.toLowerCase()) &&
        (this.filterKategori ? ev.kategori === this.filterKategori : true) &&
        (this.filterLokasi ? ev.lokasi === this.filterLokasi : true) &&
        (this.filterTanggal ? ev.tanggal === this.filterTanggal : true)
      );
    });
  }
}