import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-berita-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './berita-detail.component.html',
  styleUrls: ['./berita-detail.component.css'],
})
export class BeritaDetailComponent implements OnInit {
  berita: any;

  // Dummy data (sementara, nanti bisa dipindah ke service)
  beritaList = [
    {
      id: 1,
      judul: 'Kerja Sama Polinema & Unesa',
      img: 'assets/img/berita/berita1.jpg',
      tanggal: '12 Desember 2025',
      penulis: 'Humas Polinema',
      isi: `
Politeknik Negeri Malang PSDKU Lumajang resmi menjalin kerja sama
dengan Universitas Negeri Surabaya (UNESA).

Kerja sama ini bertujuan untuk meningkatkan kualitas pendidikan,
penelitian, dan pengabdian kepada masyarakat.

Melalui kolaborasi ini, diharapkan mahasiswa dapat memperoleh
pengalaman akademik dan praktik yang lebih luas.
      `,
    },
    {
      id: 2,
      judul: 'Prestasi Mahasiswa Polinema',
      img: 'assets/img/berita/Bisnis.jpg',
      tanggal: '10 Desember 2025',
      penulis: 'Akademik',
      isi: `
Mahasiswa Polinema kembali menorehkan prestasi membanggakan
di tingkat nasional.

Prestasi ini menjadi bukti kualitas pendidikan vokasi
yang terus dikembangkan oleh Polinema.
      `,
    },
    {
      id: 3,
      judul: 'Closing Ceremony NTVSC 2025',
      img: 'assets/img/berita/berita3.jpg',
      tanggal: '8 Desember 2025',
      penulis: 'Panitia NTVSC',
      isi: `
NTVSC 2025 resmi ditutup dengan acara Closing Ceremony
yang berlangsung meriah.

Kegiatan ini diikuti oleh peserta dari berbagai perguruan tinggi
dan industri mitra.
      `,
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.berita = this.beritaList.find((b) => b.id === id);
  }
}
