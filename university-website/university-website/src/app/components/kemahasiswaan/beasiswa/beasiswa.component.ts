import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Beasiswa {
  id: string;
  nama: string;
  kategori: string;      // misal: Polinema
  status: string;        // misal: Open Registration
  deadline: string;      // teks tanggal, misal: 1 Feb 2026
}

@Component({
  selector: 'app-beasiswa',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './beasiswa.component.html',
  styleUrls: ['./beasiswa.component.css'],
})
export class BeasiswaComponent {
  pageTitle = 'Informasi Seputar Beasiswa Polinema';
  pageSubtitle = 'Temukan Beasiswa Seputar Polinema';
  pageYear = 'Tahun 2025-2026';

  beasiswaList: Beasiswa[] = [
    {
      id: 'bidikmisi',
      nama: 'Beasiswa Bidikmisi',
      kategori: 'Polinema',
      status: 'Open Registration',
      deadline: '1 Feb 2026',
    },
    {
      id: 'ppa',
      nama: 'Beasiswa PPA',
      kategori: 'Polinema',
      status: 'Open Registration',
      deadline: '1 Feb 2026',
    },
    {
      id: 'afirmasi',
      nama: 'Beasiswa Afirmasi',
      kategori: 'Polinema',
      status: 'Open Registration',
      deadline: '1 Feb 2026',
    },
    {
      id: 'pemda',
      nama: 'Beasiswa Pemerintah Daerah',
      kategori: 'Polinema',
      status: 'Open Registration',
      deadline: '1 Feb 2026',
    },
  ];
}
