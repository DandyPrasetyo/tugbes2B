import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface BeasiswaDetail {
  id: string;
  nama: string;
  kategori: string;    // Polinema
  status: string;      // Open Registration
  deadline: string;    // 1 Feb 2026
  jenjang: string[];   // ['D4','D3']
  deskripsi: string[];
  tujuan: string[];
  sasaran: string[];
  fasilitas: string[];
}

@Component({
  selector: 'app-beasiswa-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './beasiswa-detail.component.html',
  styleUrls: ['./beasiswa-detail.component.css'],
})
export class BeasiswaDetailComponent {
  beasiswa!: BeasiswaDetail;

  private data: BeasiswaDetail[] = [
    {
      id: 'bidikmisi',
      nama: 'Beasiswa Bidikmisi',
      kategori: 'Polinema',
      status: 'Open Registration',
      deadline: '1 Feb 2026',
      jenjang: ['D4', 'D3'],
      deskripsi: [
        'Bidikmisi membantu mahasiswa agar bisa kuliah tanpa terbebani biaya, dengan memberikan:',
        'Bebas biaya kuliah (UKT/SPP).',
        'Bantuan biaya hidup setiap semester.',
      ],
      tujuan: [
        'Memberikan akses pendidikan tinggi bagi siswa berprestasi.',
        'Mengurangi angka putus kuliah karena biaya.',
        'Meningkatkan kualitas SDM Indonesia.',
      ],
      sasaran: [
        'Lulusan SMA/SMK/MA atau sederajat.',
        'Memiliki prestasi akademik yang baik.',
        'Berasal dari keluarga kurang mampu.',
        'Diterima di PTN atau PTS yang bekerja sama.',
      ],
      fasilitas: [
        'Biaya kuliah ditanggung penuh.',
        'Uang saku/biaya hidup (sesuai kebijakan).',
        'Berlaku selama masa studi normal.',
      ],
    },
    {
      id: 'ppa',
      nama: 'Beasiswa PPA',
      kategori: 'Polinema',
      status: 'Open Registration',
      deadline: '1 Feb 2026',
      jenjang: ['D4', 'D3'],
      deskripsi: [
        'PPA diberikan kepada mahasiswa berprestasi untuk mendukung keberlanjutan studi.',
      ],
      tujuan: [
        'Mendorong peningkatan prestasi akademik mahasiswa.',
        'Memberikan apresiasi bagi mahasiswa berprestasi.',
      ],
      sasaran: [
        'Mahasiswa aktif dengan IPK sesuai ketentuan.',
        'Tidak sedang menerima beasiswa lain (sesuai aturan).',
      ],
      fasilitas: [
        'Tunjangan biaya pendidikan per semester.',
        'Kesempatan mengikuti program pengembangan diri.',
      ],
    },
    {
      id: 'afirmasi',
      nama: 'Beasiswa Afirmasi',
      kategori: 'Polinema',
      status: 'Open Registration',
      deadline: '1 Feb 2026',
      jenjang: ['D4', 'D3'],
      deskripsi: [
        'Beasiswa Afirmasi ditujukan untuk kelompok tertentu agar memiliki kesempatan yang sama dalam mengenyam pendidikan tinggi.',
      ],
      tujuan: [
        'Memberikan kesempatan pendidikan tinggi kepada kelompok sasaran afirmasi.',
        'Meningkatkan pemerataan akses pendidikan tinggi.',
      ],
      sasaran: [
        'Calon mahasiswa dari daerah 3T atau kategori khusus lain.',
        'Memenuhi persyaratan akademik dan administrasi.',
      ],
      fasilitas: [
        'Biaya pendidikan.',
        'Dukungan biaya hidup sesuai ketentuan.',
      ],
    },
    {
      id: 'pemda',
      nama: 'Beasiswa Pemerintah Daerah',
      kategori: 'Polinema',
      status: 'Open Registration',
      deadline: '1 Feb 2026',
      jenjang: ['D4', 'D3'],
      deskripsi: [
        'Beasiswa Pemerintah Daerah diberikan melalui kerja sama dengan pemerintah daerah untuk mendukung putra-putri daerah.',
      ],
      tujuan: [
        'Meningkatkan kualitas SDM daerah.',
        'Mendorong putra-putri daerah melanjutkan pendidikan tinggi.',
      ],
      sasaran: [
        'Mahasiswa asal daerah sesuai kerja sama.',
        'Memenuhi persyaratan yang ditetapkan pemerintah daerah.',
      ],
      fasilitas: [
        'Dukungan biaya pendidikan.',
        'Fasilitas lain sesuai kebijakan pemerintah daerah.',
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id') || 'bidikmisi';
    this.beasiswa = this.data.find((b) => b.id === id) ?? this.data[0];
  }
}
