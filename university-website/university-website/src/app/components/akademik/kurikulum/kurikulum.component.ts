import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <== DITAMBAHKAN

type FileType = 'image' | 'pdf' | 'other';
type ActiveMenu = 'home' | 'kalender' | 'krs' | 'lms' | 'presensi';

// ===== Tambahan: struktur lampiran & submission untuk demo upload =====
type AttachmentType = 'file' | 'link' | 'video';

interface LmsAttachment {
  type: AttachmentType; // 'file' | 'link' | 'video'
  nama: string;         // nama tampilan
  url: string;          // href atau src (assets, YouTube, dsb)
}

interface LmsSubmission {
  mahasiswa: string;
  waktu: string;
  attachments: LmsAttachment[];
}

// ====== LmsCourse dengan tugas yang punya lampiran & submissions ======
interface LmsCourse {
  id: string;
  nama: string;
  dosen: string;
  gambar: string;   // path ke assets
  tugas: {
    judul: string;
    deskripsi: string;
    tenggat: string;
    lampiranDosen: LmsAttachment[]; // soal/bahan dari dosen
    submissions: LmsSubmission[];   // jawaban mahasiswa (demo, di memori)
  }[];
}

/* ===== Tambahan: struktur presensi ===== */
interface SemesterOption {
  id: string;   // contoh: '2024-2025-ganjil'
  label: string; // contoh: '2024/2025 Ganjil'
}

interface PresenceRow {
  id: number;
  courseName: string;
  meetingLabel: string; // 'Minggu ke-3'
  date: string;         // ISO string
  alphaHours: number;
  izinHours: number;
  sakitHours: number;
}

@Component({
  selector: 'app-kurikulum',
  standalone: true,
  imports: [CommonModule, FormsModule], // <== DITAMBAHKAN
  templateUrl: './kurikulum.component.html',
  styleUrls: ['./kurikulum.component.css'],
})
export class KurikulumComponent {
  // data mahasiswa
  nama = 'DANDY PRASETYO';
  nim = '243107040047';
  prodi = 'TEKNOLOGI INFORMASI';

  // menu aktif
  activeMenu: ActiveMenu = 'home';

  // konfigurasi file kalender
  kalender = {
    title: 'Kalender Akademik TA 2025/2026',
    path: 'assets/doc/kalender',
    ext: 'pdf',
  };

  // ---- KRS ----
  krsInfo = {
    judul: 'DATA RENCANA STUDI MAHASISWA',
    pesan:
      'Cetak KRS dapat dilakukan mulai tanggal 11-3-2026 sampai dengan tanggal 21-03-2026',
  };

  krsFile = {
    title: 'Kartu Rencana Studi (KRS)',
    path: '', // contoh kalau sudah ada file: 'assets/doc/krs-genap-2025-2026'
    ext: 'pdf',
  };

  // ---- LMS (tanpa database, dummy data) ----
  // state: apakah sudah klik tombol connect
  lmsConnected = false;

  // id course yang sedang dibuka
  selectedCourseId: string | null = null;

  // daftar mata kuliah
  lmsCourses: LmsCourse[] = [
    {
      id: 'kwn',
      nama: 'Kewarganegaraan',
      dosen: 'Drs. Budi Santoso',
      gambar: 'assets/lms/kewarganegaraan.jpg',
      tugas: [
        {
          judul: 'Tugas Essay Pancasila',
          deskripsi: 'Tuliskan esai tentang penerapan nilai Pancasila di kampus.',
          tenggat: '10-03-2026',
          lampiranDosen: [
            {
              type: 'file',
              nama: 'Soal Tugas Pancasila (PDF)',
              url: 'assets/lms/tugas-pancasila.pdf',
            },
            {
              type: 'link',
              nama: 'Video materi Pancasila (YouTube)',
              url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX',
            },
          ],
          submissions: [],
        },
      ],
    },
    {
      id: 'pwl',
      nama: 'Pemrograman Web Lanjut',
      dosen: 'Ir. Siti Aminah, M.Kom',
      gambar: 'assets/lms/pwl.jpg',
      tugas: [
        {
          judul: 'Project SPA Angular',
          deskripsi: 'Membangun aplikasi SPA menggunakan Angular dan REST API.',
          tenggat: '15-03-2026',
          lampiranDosen: [
            {
              type: 'file',
              nama: 'Deskripsi Project (DOCX)',
              url: 'assets/lms/project-spa-angular.docx',
            },
            {
              type: 'video',
              nama: 'Video tutorial setup project',
              url: 'assets/lms/video-setup-project.mp4',
            },
          ],
          submissions: [],
        },
        {
          judul: 'Quiz HTTP & Routing',
          deskripsi: 'Quiz online di LMS tentang HTTP, Routing dan Guard.',
          tenggat: '05-03-2026',
          lampiranDosen: [
            {
              type: 'link',
              nama: 'Link Quiz di Google Form',
              url: 'https://forms.gle/XXXXXXXXXXX',
            },
          ],
          submissions: [],
        },
      ],
    },
    // tambah mata kuliah lain sesuai kebutuhan
  ];

  /* ====== PRESENSI: state untuk dropdown semester & tabel ====== */
  semesterOptions: SemesterOption[] = [
    { id: '2024-2025-ganjil', label: '2024/2025 Ganjil' },
    { id: '2024-2025-genap', label: '2024/2025 Genap' },
    { id: '2025-2026-ganjil', label: '2025/2026 Ganjil' },
  ];

  // default semester yang dipilih
  selectedSemesterId: string = '2024-2025-ganjil';

  // map semester -> data presensi (dummy, nanti bisa diganti dari API)
  presenceMap: Record<string, PresenceRow[]> = {
    '2024-2025-ganjil': [
      {
        id: 1,
        courseName: 'Bahasa Indonesia',
        meetingLabel: 'Minggu ke-10',
        date: '2025-04-30T00:00:00Z',
        alphaHours: 0,
        izinHours: 0,
        sakitHours: 2,
      },
      {
        id: 2,
        courseName: 'Jaringan Komputer',
        meetingLabel: 'Minggu ke-4',
        date: '2025-03-07T00:00:00Z',
        alphaHours: 2,
        izinHours: 0,
        sakitHours: 0,
      },
      {
        id: 3,
        courseName: 'Praktikum Basis Data',
        meetingLabel: 'Minggu ke-3',
        date: '2025-02-25T00:00:00Z',
        alphaHours: 3,
        izinHours: 0,
        sakitHours: 0,
      },
    ],
    '2024-2025-genap': [
      {
        id: 1,
        courseName: 'PKN',
        meetingLabel: 'Minggu ke-10',
        date: '2025-04-30T00:00:00Z',
        alphaHours: 0,
        izinHours: 0,
        sakitHours: 5,
      },
      {
        id: 2,
        courseName: 'Jaringan Komputer',
        meetingLabel: 'Minggu ke-4',
        date: '2025-03-07T00:00:00Z',
        alphaHours: 3,
        izinHours: 0,
        sakitHours: 0,
      },
      {
        id: 3,
        courseName: 'Pemograman Dasar',
        meetingLabel: 'Minggu ke-3',
        date: '2025-02-25T00:00:00Z',
        alphaHours: 1,
        izinHours: 0,
        sakitHours: 0,
      },
    ],
    '2025-2026-ganjil': [],
  };

  // hasil filter untuk semester aktif
  presenceRows: PresenceRow[] = [];
  totalAlpha = 0;
  totalIzin = 0;
  totalSakit = 0;

  constructor(private sanitizer: DomSanitizer) {
    // inisialisasi awal presensi supaya saat tab Presensi dibuka sudah siap
    this.filterPresenceBySemester();
  }

  // set menu aktif
  setActiveMenu(menu: ActiveMenu): void {
    this.activeMenu = menu;

    // reset state LMS saat pindah menu
    if (menu !== 'lms') {
      this.lmsConnected = false;
      this.selectedCourseId = null;
    }

    // kalau pindah ke presensi, pastikan data sudah terfilter
    if (menu === 'presensi') {
      this.filterPresenceBySemester();
    }
  }

  // --- Kalender ---
  get fileType(): FileType {
    const e = this.kalender.ext.toLowerCase();
    if (e === 'pdf') return 'pdf';
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(e)) return 'image';
    return 'other';
  }

  get downloadPath(): SafeUrl {
    const url = `${this.kalender.path}.${this.kalender.ext}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  get previewPath(): SafeResourceUrl {
    const url = `${this.kalender.path}.${this.kalender.ext}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  get showKalender(): boolean {
    return this.activeMenu === 'kalender';
  }

  // --- KRS ---
  get isKrsUploaded(): boolean {
    return !!this.krsFile.path;
  }

  get krsDownloadPath(): SafeUrl {
    if (!this.isKrsUploaded) return '' as any;
    const url = `${this.krsFile.path}.${this.krsFile.ext}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  get krsPreviewPath(): SafeResourceUrl {
    if (!this.isKrsUploaded) return '' as any;
    const url = `${this.krsFile.path}.${this.krsFile.ext}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // --- LMS ---
  connectLms(): void {
    this.lmsConnected = true;
    this.selectedCourseId = null;
  }

  openCourse(courseId: string): void {
    this.selectedCourseId = courseId;
  }

  backToCourseList(): void {
    this.selectedCourseId = null;
  }

  get selectedCourse(): LmsCourse | null {
    return this.lmsCourses.find(c => c.id === this.selectedCourseId) || null;
  }

  // ===== Demo upload: pilih file dari perangkat (hanya nama file) =====
  selectedFiles: string[] = [];

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files) {
      this.selectedFiles = [];
      return;
    }
    this.selectedFiles = Array.from(input.files).map(f => f.name);
  }

  // Opsional demo: method untuk menambahkan submission dummy ke tugas tertentu
  // (bisa dipanggil dari tombol "Kirim tugas" di HTML, hanya disimpan di memori)
  addDummySubmission(task: { submissions: LmsSubmission[] }): void {
    const now = new Date();
    task.submissions.push({
      mahasiswa: this.nama,
      waktu: now.toLocaleString(),
      attachments: [
        {
          type: 'link',
          nama: 'Link jawaban demo',
          url: 'https://contoh-link-jawaban.com',
        },
      ],
    });
  }

  /* ====== PRESENSI: fungsi filter & helper ====== */
  filterPresenceBySemester(): void {
    this.presenceRows = this.presenceMap[this.selectedSemesterId] || [];
    this.totalAlpha = this.presenceRows.reduce((sum, r) => sum + r.alphaHours, 0);
    this.totalIzin = this.presenceRows.reduce((sum, r) => sum + r.izinHours, 0);
    this.totalSakit = this.presenceRows.reduce((sum, r) => sum + r.sakitHours, 0);
  }

  // total semua ketidakhadiran (Alpha + Ijin + Sakit) dalam jam
  get totalAjs(): number {
    return this.totalAlpha + this.totalIzin + this.totalSakit;
  }
}
