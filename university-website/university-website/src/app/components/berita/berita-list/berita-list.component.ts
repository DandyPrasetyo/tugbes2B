import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-berita-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './berita-list.component.html',
  styleUrls: ['./berita-list.component.css'],
})
export class BeritaListComponent {
  beritaList = [
    {
      id: 1,
      judul: 'Kerja Sama Polinema & Unesa',
      img: 'assets/img/berita/berita1.jpg',
    },
    {
      id: 2,
      judul: 'Prestasi Mahasiswa Polinema',
      img: 'assets/img/berita/Bisnis.jpg',
    },
    {
      id: 3,
      judul: 'Closing Ceremony NTVSC 2025',
      img: 'assets/img/berita/berita3.jpg',
    },
  ];
}
