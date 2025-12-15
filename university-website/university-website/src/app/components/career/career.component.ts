import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit, OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  /* ====================================== */
  /*               HERO SLIDER              */
  /* ====================================== */

  currentSlide = 0;

  slides = [
    {
      image: 'kampus5.jpg',
      title: 'Bangun Kariermu Bersama Polinema Career Center',
      desc: 'Akses informasi magang, lowongan kerja, dan pelatihan karier terbaru.',
    },
    {
      image: 'loker11.jpg',
      title: 'Temukan Peluang Kerja Terbaik',
      desc: 'Cari lowongan pekerjaan dari perusahaan terpercaya setiap hari.',
    },
    {
      image: 'loker.jpg',
      title: 'Tingkatkan Skill dan Kompetensimu',
      desc: 'Ikuti pelatihan dan workshop untuk masa depan profesionalmu.',
    },
  ];

  private slideInterval: any;

  ngOnInit(): void {
    // 🔥 FIX SSR: hanya jalankan di browser
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }

    this.displayedItems = this.lowonganList;
    this.moreLink = '/career/loker';
  }

  // ✅ Hentikan interval saat component dihancurkan
  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startAutoSlide() {
    if (!this.slides || this.slides.length === 0) return;
    this.slideInterval = setInterval(() => this.nextSlide(), 4000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  /* ====================================== */
  /*      LOWONGAN & MAGANG HOMEPAGE        */
  /* ====================================== */

  selectedCategory: string = 'loker';

  lowonganList = [
    {
      img: 'assets/img/loker1.jpg',
      logo: 'assets/img/mitra/astrawhite.png',
      title: 'PT Astra Otoparts',
      desc: 'Mechanical Engineering, IT, Production Staff',
      post: '12 Nov 2025',
      deadline: '25 Nov 2025',
      statusHtml: "🔵 <span class='text-green-600'>Tersedia</span>",
    },
    {
      img: 'assets/img/loker2.jpg',
      logo: 'assets/img/mitra/indopack.png',
      title: 'PT Surya Multi Indopack',
      desc: 'Quality Assurance, Production, Engineering',
      post: '10 Nov 2025',
      deadline: '30 Nov 2025',
      statusHtml: "🔵 <span class='text-green-600'>Tersedia</span>",
    },
    {
      img: 'assets/img/loker3.jpg',
      logo: 'assets/img/mitra/kelantan.png',
      title: 'PT Kelantan Kemas',
      desc: 'Operator Forklift, Staff Logistik',
      post: '05 Nov 2025',
      deadline: '20 Nov 2025',
      statusHtml: "🔴 <span class='text-red-600'>Ditutup</span>",
    },
  ];

  magangList = [
    {
      img: 'assets/img/magang/magang1.jpg',
      logo: 'assets/img/mitra/google.png',
      title: 'Magang Engineering & IT',
      desc: 'Engineering, IT',
      post: '12 Nov 2025',
      deadline: '25 Nov 2025',
      statusHtml: "🔵 <span class='text-green-600'>Tersedia</span>",
    },
    {
      img: 'assets/img/magang/magang2.jpg',
      logo: 'assets/img/mitra/bni.png',
      title: 'Open Recruitment Program',
      desc: 'Administrasi, Finance',
      post: '12 Nov 2025',
      deadline: '25 Nov 2025',
      statusHtml: "🔵 <span class='text-green-600'>Tersedia</span>",
    },
    {
      img: 'assets/img/magang/magang3.jpg',
      logo: 'assets/img/mitra/pertamina.png',
      title: 'Magang Perusahaan BUMN',
      desc: 'Logistik & Teknisi',
      post: '12 Nov 2025',
      deadline: '25 Nov 2025',
      statusHtml: "🔵 <span class='text-green-600'>Tersedia</span>",
    },
  ];

  displayedItems = this.lowonganList;
  moreLink: string = '/career/loker';

  selectCategory(category: string) {
    this.selectedCategory = category;

    if (category === 'loker') {
      this.displayedItems = this.lowonganList;
      this.moreLink = '/career/loker';
    } else {
      this.displayedItems = this.magangList;
      this.moreLink = '/career/magang';
    }
  }
}
