import { Component, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  navigation = [
    { name: 'BERANDA', path: '/' },
    {
      name: 'PROFIL',
      children: [
        { name: 'PROFIL', path: '/profil' },
        { name: 'TENTANG_KAMPUS', path: '/tentang-kampus' },
        { name: 'VISI_MISI', path: '/profil/visi-misi' },
        { name: 'STRUKTUR_ORGANISASI', path: '/struktur-organisasi' },
        { name: 'FASILITAS', path: '/fasilitas' },
      ],
    },
    {
      name: 'AKADEMIK',
      children: [
        { name: 'MAHASISWA_AKTIF', path: '/akademik/mahasiswa-aktif' },
        { name: 'DOSEN_KEHADIRAN', path: '/akademik/dosen-kehadiran' },
        { name: 'PRODI', path: '/akademik/prodi' },
        { name: 'KURIKULUM', path: '/akademik/kurikulum' },
        { name: 'JADWAL_KULIAH', path: '/akademik/jadwal-kuliah' },
      ],
    },
    {
      name: 'KEMAHASISWAAN',
      children: [
        { name: 'ORGANISASI_MAHASISWA', path: '/kemahasiswaan/organisasi-mahasiswa' },
        { name: 'BEASISWA', path: '/kemahasiswaan/beasiswa' },
        { name: 'ALUMNI', path: '/kemahasiswaan/alumni' },
      ],
    },
    {
      name: 'PMB',
      children: [
        { name: 'PENGUMUMAN_PMB', path: '/pmb/pengumuman' },
        { name: 'JALUR_PENDAFTARAN', path: '/pmb/jalur' },
        { name: 'HASIL_SELEKSI', path: '/pmb/hasil' },
      ],
    },
    { name: 'CARRER', path: '/career' },
    { name: 'CONTACT', path: '/contact' },
  ];

  // ====== SEARCH ======
  showSearch = false;
  searchKeyword = '';
  searchResults: { name: string; path: string }[] = [];

  features = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil', path: '/profil' },
    { name: 'Tentang Kampus', path: '/tentang-kampus' },
    { name: 'Visi & Misi', path: '/profil/visi-misi' },
    { name: 'Struktur Organisasi', path: '/struktur-organisasi' },
    { name: 'Fasilitas', path: '/fasilitas' },
    { name: 'Mahasiswa Aktif', path: '/akademik/mahasiswa-aktif' },
    { name: 'Dosen & Kehadiran', path: '/akademik/dosen-kehadiran' },
    { name: 'Prodi', path: '/akademik/prodi' },
    { name: 'Kurikulum', path: '/akademik/kurikulum' },
    { name: 'Jadwal Kuliah', path: '/akademik/jadwal-kuliah' },
    { name: 'Organisasi Mahasiswa', path: '/kemahasiswaan/organisasi-mahasiswa' },
    { name: 'Beasiswa', path: '/kemahasiswaan/beasiswa' },
    { name: 'Alumni', path: '/kemahasiswaan/alumni' },
    { name: 'Pengumuman PMB', path: '/pmb/pengumuman' },
    { name: 'Jalur Pendaftaran', path: '/pmb/jalur' },
    { name: 'Hasil Seleksi', path: '/pmb/hasil' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  // ====== BAHASA ======
  currentLang: string = 'id';
  showLangMenu = false;

  allLanguages = [
    { code: 'id', label: 'Bahasa Indonesia', flag: 'assets/img/flag/indo.webp' },
    { code: 'en', label: 'English', flag: 'assets/img/flag/eng.jpg' },
    { code: 'fr', label: 'Français', flag: 'assets/img/flag/fran.jpg' },
    { code: 'de', label: 'Deutsch', flag: 'assets/img/flag/german.jpg' },
    { code: 'es', label: 'Español', flag: 'assets/img/flag/espanol.webp' },
    { code: 'ar', label: 'العربية', flag: 'assets/img/flag/arabia.png' },
    { code: 'zh', label: '中文 (Chinese)', flag: 'assets/img/flag/cino.jpg' },
    { code: 'ja', label: '日本語 (Japanese)', flag: 'assets/img/flag/jepang.jpg' },
    { code: 'ko', label: '한국어 (Korean)', flag: 'assets/img/flag/kr.webp' },
    { code: 'ru', label: 'Русский (Russian)', flag: 'assets/img/flag/rusia.jpg' },
  ];

  get currentFlagSrc(): string {
    const lang = this.allLanguages.find(l => l.code === this.currentLang);
    return lang ? lang.flag : 'assets/img/icons/flag.svg';
  }

  constructor(
    private router: Router,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.translate.addLangs(this.allLanguages.map(l => l.code));
    this.translate.setDefaultLang('id');

    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('lang');
      if (saved) {
        this.currentLang = saved;
      }
      this.translate.use(this.currentLang);
    }
  }

  // ====== SEARCH ======
  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchKeyword = '';
      this.searchResults = [];
    }
  }

  onSearch() {
    const keyword = this.searchKeyword?.trim().toLowerCase();
    if (!keyword) {
      this.searchResults = [];
      return;
    }

    this.searchResults = this.features.filter(f =>
      f.name.toLowerCase().includes(keyword)
    );
  }

  goToFeature(path: string) {
    this.searchResults = [];
    this.searchKeyword = '';
    this.showSearch = false;
    this.router.navigate([path]);
  }

  // ====== BAHASA ======
  toggleLangMenu() {
    this.showLangMenu = !this.showLangMenu;
  }

  switchLang(langCode: string) {
    if (this.currentLang === langCode) {
      this.showLangMenu = false;
      return;
    }

    this.currentLang = langCode;
    this.showLangMenu = false;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', langCode);
      this.translate.use(langCode);
    }
  }
}
