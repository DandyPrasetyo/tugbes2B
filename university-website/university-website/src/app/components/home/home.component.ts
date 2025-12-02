import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterModule, Router } from '@angular/router';   // <-- DITAMBAH ROUTER

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgClass, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private router: Router) {}  // <-- DITAMBAHKAN

  /* ==========================
        HERO SLIDER
  ========================== */
  images = [
    'assets/img/kampus4.jpg',
    'assets/img/kampus3.jpg',
    'assets/img/kampus0.jpg',
  ];

  currentIndex = 0;
  currentImage = this.images[0];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }

  changeSlide(i: number) {
    this.currentIndex = i;
    this.currentImage = this.images[i];
  }


  /* ==========================
        FASILITAS KAMPUS
  ========================== */
  fasilitasList = [
    { nama: 'Ruang Kelas', img: 'assets/img/kelas.jpg', icon: '🏫', title: 'Ruang Kelas' },
    { nama: 'Laboratorium Komputer', img: 'assets/img/lab.jpg', icon: '💻', title: 'Lab Komputer' },
    { nama: 'Perpustakaan', img: 'assets/img/perpus.jpeg', icon: '📚', title: 'Perpustakaan' },
    { nama: 'Kantin Kamppas', img: 'assets/img/kantin.jpg', icon: '🍽️', title: 'Kantin' },
    { nama: 'Lapangan Voli', img: 'assets/img/voli.jpg', icon: '🏐', title: 'Lapangan' },
    { nama: 'Parkiran', img: 'assets/img/parkir.jpg', icon: '🅿️', title: 'Parkir' },
    { nama: 'WiFi Kecepatan Tinggi', img: 'assets/img/s1.jpg', icon: '📶', title: 'WiFi' }
  ];

  scrollFasilitas(direction: 'next' | 'prev') {
    const slider = document.getElementById('fasilitasSlider');
    if (!slider) return;

    const amount = 250;

    if (direction === 'next') {
      slider.scrollLeft += amount;
    } else {
      slider.scrollLeft -= amount;
    }
  }


  /* ==========================
        BERITA UTAMA
  ========================== */
  beritaList = [
    { 
      id: 1,
      img: 'assets/img/berita/berita1.jpg',
      judul: 'Politeknik Negeri Malang dan Universitas Negeri Surabaya Tandatangani Nota Kesepahaman untuk Perkuat Kolaborasi Tridharma'
    },
    { 
      id: 2,
      img: 'assets/img/berita/Bisnis.jpg',
      judul: ' Politeknik Negeri Malang (Polinema) mencetak prestasi gemilang di KMIPN. Ada lima tim Polinema yang menyabet juara.'
    },
    { 
      id: 3,
      img: 'assets/img/berita/berita3.jpg',
      judul: 'Polinema Sukses Gelar Closing Ceremony dan Awarding NTVSC 2025'
    }
  ];

  selectedBerita: any = null;

  openBerita(b: any) {
    this.selectedBerita = b;
  }

  goToBerita(id: number) {      // <-- FUNGSI KLIK BERITA DITAMBAHKAN
    this.router.navigate(['/berita', id]);
  }

  /* ==========================
        POLINEMA DALAM ANGKA
  ========================== */
  angkaList = [
    { angka: '1.500+', label: 'Mahasiswa Aktif' },
    { angka: '25+', label: 'Dosen & Tenaga Ahli' },
    { angka: '12', label: 'Laboratorium' },
    { angka: '10+', label: 'Kerja Sama Industri' }
  ];
}
