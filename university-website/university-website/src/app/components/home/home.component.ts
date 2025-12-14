import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgClass, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  /* ==========================
        HERO SLIDER
  ========================== */

  images: string[] = [
    'assets/img/kampus4.jpg',
    'assets/img/kampus3.jpg',
    'assets/img/kampus0.jpg',
  ];

  slideTexts = [
    {
      title: `SELAMAT DATANG DI POLITEKNIK NEGERI MALANG PSDKU LUMAJANG`,
      desc: `Bersama kami kamu akan tumbuh menjadi pribadi mandiri, terampil,
dan siap menghadapi tantangan dunia kerja.`,
      sub: 'Ayo gabung dan jadikan mimpimu kenyataan!',
      route: '/pmb',
      buttonText: 'Daftar Sekarang',
    },
    {
      title: 'KAMPUS VOKASI UNGGULAN',
      desc: 'Pendidikan vokasi berbasis praktik\nsesuai kebutuhan dunia industri.',
      sub: 'Belajar langsung, siap kerja.',
      route: '/pmb',
      buttonText: 'Daftar Sekarang',
    },
    {
      title: 'SIAP BERSAING DI DUNIA KERJA',
      desc: 'Kurikulum aplikatif, dosen profesional,\ndan fasilitas modern.',
      sub: 'Bangun masa depanmu bersama kami.',
      route: '/career',
      buttonText: 'Jelajahi Karir',
    },
  ];

  currentIndex = 0;
  currentImage = this.images[0];
  isFading = false;
  private sliderInterval!: number;

  ngOnInit(): void {
    this.sliderInterval = window.setInterval(() => {
      this.nextSlide();
    }, 3500);
  }

  ngOnDestroy(): void {
    clearInterval(this.sliderInterval);
  }

  nextSlide(): void {
    this.fadeAndChange(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    });
  }

  prevSlide(): void {
    this.fadeAndChange(() => {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    });
  }

  changeSlide(i: number): void {
    if (i === this.currentIndex) return;
    this.fadeAndChange(() => (this.currentIndex = i));
  }

  private fadeAndChange(action: () => void): void {
    this.isFading = true;
    setTimeout(() => {
      action();
      this.currentImage = this.images[this.currentIndex];
      this.isFading = false;
    }, 300);
  }

  /* ==========================
        FASILITAS
  ========================== */

  fasilitasList = [
    {
      nama: 'Ruang Kelas',
      img: 'assets/img/kelas.jpg',
      icon: '🏫',
      title: 'Ruang Kelas',
    },
    {
      nama: 'Laboratorium',
      img: 'assets/img/lab.jpg',
      icon: '💻',
      title: 'Lab Komputer',
    },
    {
      nama: 'Perpustakaan',
      img: 'assets/img/perpus.jpeg',
      icon: '📚',
      title: 'Perpustakaan',
    },
    {
      nama: 'Kantin',
      img: 'assets/img/kantin.jpg',
      icon: '🍽️',
      title: 'Kantin',
    },
    {
      nama: 'Lapangan',
      img: 'assets/img/voli.jpg',
      icon: '🏐',
      title: 'Lapangan',
    },
  ];

  scrollFasilitas(direction: 'next' | 'prev'): void {
    const slider = document.getElementById('fasilitasSlider');
    if (!slider) return;

    slider.scrollLeft += direction === 'next' ? 260 : -260;
  }

  /* ==========================
        BERITA
  ========================== */

  beritaList = [
    {
      id: 1,
      img: 'assets/img/berita/berita1.jpg',
      judul: 'Kerja Sama Polinema & Unesa',
    },
    {
      id: 2,
      img: 'assets/img/berita/Bisnis.jpg',
      judul: 'Prestasi Mahasiswa Polinema',
    },
    {
      id: 3,
      img: 'assets/img/berita/berita3.jpg',
      judul: 'Closing Ceremony NTVSC 2025',
    },
  ];

  /* ==========================
        ANGKA
  ========================== */

  angkaList = [
    { angka: '1.500+', label: 'Mahasiswa Aktif' },
    { angka: '25+', label: 'Dosen & Tenaga Ahli' },
    { angka: '12', label: 'Laboratorium' },
    { angka: '10+', label: 'Kerja Sama Industri' },
  ];
}
