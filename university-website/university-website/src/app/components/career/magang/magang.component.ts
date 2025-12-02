import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-magang',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './magang.component.html',
  styleUrls: ['./magang.component.css'],
})
export class MagangComponent {
  search = '';
  filterLokasi = '';
  filterDurasi = '';

  magang = [
    {
      posisi: 'Magang Engineering & IT',
      perusahaan: 'PT Astra Otoparts',
      lokasi: 'Jakarta',
      durasi: '3 Bulan',
      posted: '12 Nov 2025',
      deadline: '25 Nov 2025',
      status: 'Tersedia',
      image: 'assets/img/magang1.jpg',
    },
    {
      posisi: 'Magang Karyawan',
      perusahaan: 'PT Surya Multi Indopack',
      lokasi: 'Surabaya',
      durasi: '2 Bulan',
      posted: '11 Nov 2025',
      deadline: '28 Nov 2025',
      status: 'Tersedia',
      image: 'assets/img/magang2.jpg',
    },
    {
      posisi: 'Magang BUMN',
      perusahaan: 'PT Pelindo',
      lokasi: 'Malang',
      durasi: '6 Bulan',
      posted: '05 Nov 2025',
      deadline: '20 Nov 2025',
      status: 'Ditutup',
      image: 'assets/img/magang3.jpg',
    },
  ];

  get filteredMagang() {
    return this.magang.filter((item) => {
      return (
        item.posisi.toLowerCase().includes(this.search.toLowerCase()) &&
        (this.filterLokasi ? item.lokasi === this.filterLokasi : true) &&
        (this.filterDurasi ? item.durasi === this.filterDurasi : true)
      );
    });
  }
}