import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  /* ==========================
        HERO SLIDER
  ========================== */
  images = [
    'assets/img/kampus4.jpg',
    'assets/img/kampus3.jpg',
    'assets/img/kampus.2.jpg',
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
    { nama: 'Ruang Kelas Modern', img: 'assets/fasilitas/kelas.jpg', icon: '🏫', title: 'Ruang Kelas' },
    { nama: 'Laboratorium Komputer', img: 'assets/fasilitas/lab.jpg', icon: '💻', title: 'Lab Komputer' },
    { nama: 'Perpustakaan', img: 'assets/fasilitas/perpus.jpg', icon: '📚', title: 'Perpustakaan' },
    { nama: 'Aula Serbaguna', img: 'assets/fasilitas/aula.jpg', icon: '🏟️', title: 'Aula Besar' },
    { nama: 'Kantin Kampus', img: 'assets/fasilitas/kantin.jpg', icon: '🍽️', title: 'Kantin' },
    { nama: 'Lapangan Olahraga', img: 'assets/fasilitas/lapangan.jpg', icon: '⚽', title: 'Lapangan' },
    { nama: 'Ruang UKS', img: 'assets/fasilitas/uks.jpg', icon: '🏥', title: 'UKS' },
    { nama: 'Parkiran Luas', img: 'assets/fasilitas/parkir.jpg', icon: '🅿️', title: 'Parkir' },
    { nama: 'Ruang Himpunan', img: 'assets/fasilitas/hima.jpg', icon: '👥', title: 'Ruang HMJ' },
    { nama: 'WiFi Kecepatan Tinggi', img: 'assets/fasilitas/wifi.jpg', icon: '📶', title: 'WiFi' }
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
    { img: 'assets/berita/b1.jpg', judul: 'Polinema Lumajang Gelar Seminar Digital Marketing' },
    { img: 'assets/berita/b2.jpg', judul: 'Mahasiswa Berprestasi Raih Juara 1 BIMBA 2025' },
    { img: 'assets/berita/b3.jpg', judul: 'Kegiatan Pengabdian Masyarakat di Desa Sumberwangi' }
  ];


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
