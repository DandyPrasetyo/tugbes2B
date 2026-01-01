import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OrgCard {
  id: number;
  name: string;
  subtitle?: string;
  level: number;
  group: 'top' | 'director' | 'wakil' | 'bagian' | 'jurusan' | 'p3m' | 'upa' | 'fungsional';
}

@Component({
  selector: 'app-struktur-organisasi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './struktur-organisasi.component.html',
  styleUrls: ['./struktur-organisasi.component.css']
})
export class StrukturOrganisasiComponent implements OnInit {

  /* FOTO KAMPUS (statik dari assets) */
  heroImage: string = 'assets/img/kampus3.jpg';

  /* DATA KARTU */
  topCards: OrgCard[] = [];
  directorCard!: OrgCard;
  wakilCards: OrgCard[] = [];
  bagianCards: OrgCard[] = [];
  jurusanCard!: OrgCard;
  p3mCard!: OrgCard;
  upaCards: OrgCard[] = [];
  fungsionalCard!: OrgCard;

  jurusanList: string[] = [
    'Jurusan Teknik Elektro',
    'Jurusan Teknik Mesin',
    'Jurusan Teknik Sipil',
    'Jurusan Teknik Kimia',
    'Jurusan Akuntansi',
    'Jurusan Administrasi Niaga',
    'Jurusan Teknologi Informasi'
  ];

  /* MODAL */
  selectedCard: OrgCard | null = null;
  isDetailVisible = false;

  ngOnInit(): void {
    this.initData();
  }

  private initData(): void {
    const cards: OrgCard[] = [
      { id: 1, name: 'Senat', level: 1, group: 'top', subtitle: 'Senat Politeknik Negeri Malang' },
      { id: 2, name: 'Satuan Pengawas Internal', level: 1, group: 'top', subtitle: 'Unit Pengawasan Internal' },
      { id: 3, name: 'Dewan Pertimbangan', level: 1, group: 'top', subtitle: 'Dewan Pertimbangan' },

      { id: 10, name: 'Direktur', level: 2, group: 'director', subtitle: 'Direktur Politeknik Negeri Malang' },

      { id: 11, name: 'Wakil Direktur Bidang Akademik', level: 3, group: 'wakil', subtitle: 'Wakil Direktur Akademik' },
      { id: 12, name: 'Wakil Direktur Bidang Keuangan dan Umum', level: 3, group: 'wakil', subtitle: 'Wakil Direktur Keuangan dan Umum' },
      { id: 13, name: 'Wakil Direktur Bidang Kemahasiswaan dan Alumni', level: 3, group: 'wakil', subtitle: 'Wakil Direktur Kemahasiswaan' },
      { id: 14, name: 'Wakil Direktur Bidang Perencanaan dan Kerja Sama', level: 3, group: 'wakil', subtitle: 'Wakil Direktur Perencanaan' },

      { id: 20, name: 'Bagian Akademik dan Kemahasiswaan (BAK)', level: 4, group: 'bagian', subtitle: 'Bagian Akademik dan Kemahasiswaan' },
      { id: 21, name: 'Subbagian Akademik', level: 4, group: 'bagian', subtitle: 'Subbagian Akademik' },
      { id: 22, name: 'Bagian Perencanaan, Keuangan, dan Umum (BPKU)', level: 4, group: 'bagian', subtitle: 'Bagian Perencanaan, Keuangan, dan Umum' },
      { id: 23, name: 'Subbagian Umum', level: 4, group: 'bagian', subtitle: 'Subbagian Umum' },
      { id: 24, name: 'Pusat Penjaminan Mutu dan Pengembangan Pembelajaran (P2MPP)', level: 4, group: 'bagian', subtitle: 'Pusat Penjaminan Mutu & Pengembangan Pembelajaran' },

      { id: 30, name: 'Jurusan', level: 5, group: 'jurusan', subtitle: 'Koordinasi Jurusan' },
      { id: 31, name: 'Pusat Penelitian dan Pengabdian Kepada Masyarakat (P3M)', level: 5, group: 'p3m', subtitle: 'Pusat Penelitian & Pengabdian Kepada Masyarakat' },

      { id: 40, name: 'UPA Perpustakaan', level: 6, group: 'upa' },
      { id: 41, name: 'UPA Teknologi Informasi dan Komunikasi', level: 6, group: 'upa' },
      { id: 42, name: 'UPA Bahasa', level: 6, group: 'upa' },
      { id: 43, name: 'UPA Perawatan dan Perbaikan', level: 6, group: 'upa' },
      { id: 44, name: 'UPA Pengembangan Karier dan Kewirausahaan', level: 6, group: 'upa' },
      { id: 45, name: 'UPA Layanan Uji Kompetensi', level: 6, group: 'upa' },
      { id: 46, name: 'UPA Percetakan dan Penerbitan', level: 6, group: 'upa' },

      { id: 50, name: 'Kelompok Jabatan Fungsional', level: 7, group: 'fungsional' }
    ];

    this.topCards = cards.filter(c => c.group === 'top');
    this.directorCard = cards.find(c => c.group === 'director')!;
    this.wakilCards = cards.filter(c => c.group === 'wakil');
    this.bagianCards = cards.filter(c => c.group === 'bagian');
    this.jurusanCard = cards.find(c => c.group === 'jurusan')!;
    this.p3mCard = cards.find(c => c.group === 'p3m')!;
    this.upaCards = cards.filter(c => c.group === 'upa');
    this.fungsionalCard = cards.find(c => c.group === 'fungsional')!;
  }

  /* INTERAKSI */
  openDetail(card: OrgCard): void {
    this.selectedCard = card;
    this.isDetailVisible = true;
  }

  closeDetail(): void {
    this.isDetailVisible = false;
    this.selectedCard = null;
  }
}
