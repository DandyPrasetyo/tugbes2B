import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

// TAMBAHAN: service lowongan & magang
import { LowonganService } from '@services/lowongan.service';
import { MagangService } from '@services/magang.service';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private lowonganService: LowonganService, // TAMBAHAN
    private magangService: MagangService,     // TAMBAHAN
    private router: Router                    // TAMBAHAN
  ) {}

  // TAMBAHAN: base URL poster & logo (sesuai backend)
  posterBaseUrl = 'http://localhost:8080/';
  // SAMA seperti MitraComponent
  logoBaseUrl = 'http://localhost:8080/uploads/logo-perusahaan/';

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
      image: 'loker.jpeg',
      title: 'Tingkatkan Skill dan Kompetensimu',
      desc: 'Ikuti pelatihan dan workshop untuk masa depan profesionalmu.',
    },
  ];

  private slideInterval: any;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }

    this.displayedItems = [];
    this.moreLink = '/career/loker';
    this.loadLatestFromBackend();
  }

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

  get heroBackgroundStyle() {
    return {
      'background-image': `url(assets/img/${this.slides[this.currentSlide].image})`,
      'background-size': 'contain',
      'background-position': 'center center',
      'background-repeat': 'no-repeat',
    };
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

    this.displayedItems = [];
    this.moreLink = category === 'loker' ? '/career/loker' : '/career/magang';

    this.loadLatestFromBackend();
  }

  /* ====================================== */
  /*         TAMBAHAN: DATA BACKEND         */
  /* ====================================== */

  private loadLatestFromBackend(): void {
    if (this.selectedCategory === 'loker') {
      this.lowonganService.getLatest(3).subscribe({
        next: (list: any[]) => {
          this.displayedItems = list
            .filter((job) => job.tipePekerjaan !== 'Magang')
            .map((job) => ({
              _id: job.lowonganId,
              img: job.flayer ? this.posterBaseUrl + job.flayer : '',
              // LOGO SAMA CARA AMBILNYA DENGAN MITRA
              logo: job.perusahaan?.logo
                ? this.logoBaseUrl + job.perusahaan.logo
                : '',
              title: job.judulLowongan,
              desc: job.posisi,
              post: job.createdAt ?? '-',
              deadline: job.batasTanggal ?? '-',
              statusHtml:
                job.status === 'Aktif'
                  ? "🔵 <span class='text-green-600'>Tersedia</span>"
                  : "🔴 <span class='text-red-600'>Ditutup</span>",
            }));
        },
        error: (err) => {
          console.error('Gagal load lowongan terbaru', err);
        },
      });
    } else {
      this.magangService.getLatest(3).subscribe({
        next: (list: any[]) => {
          console.log('MAGANG LATEST', list);

          this.displayedItems = list.map((job) => ({
            _id: job.lowonganId,
            img: job.flayer ? this.posterBaseUrl + job.flayer : '',
            // LOGO SAMA CARA AMBILNYA DENGAN MITRA
            logo: job.perusahaan?.logo
              ? this.logoBaseUrl + job.perusahaan.logo
              : '',
            title: job.judulLowongan,
            desc: job.posisi,
            post: job.createdAt ?? '-',
            deadline: job.batasTanggal ?? '-',
            statusHtml:
              job.status === 'Aktif'
                ? "🔵 <span class='text-green-600'>Tersedia</span>"
                : "🔴 <span class='text-red-600'>Ditutup</span>",
          }));
        },
        error: (err) => {
          console.error('Gagal load magang terbaru', err);
        },
      });
    }
  }

  // TAMBAHAN: tombol Detail di card beranda
  goDetail(item: any): void {
    if (!item?._id) return;

    if (this.selectedCategory === 'loker') {
      this.router.navigate(['/career/loker', item._id]);
    } else {
      this.router.navigate(['/career/magang', item._id]);
    }
  }
}
