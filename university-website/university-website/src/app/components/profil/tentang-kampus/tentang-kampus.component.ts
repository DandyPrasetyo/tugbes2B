import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface TimelineItem {
  tahun: string;
  judul: string;
  deskripsi: string;
}

@Component({
  selector: 'app-tentang-kampus',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tentang-kampus.component.html',
  styleUrls: ['./tentang-kampus.component.css'],
})
export class TentangKampusComponent {
  heroTitle = 'Sejarah Politeknik Negeri Malang PSDKU Lumajang';
  heroImage = 'assets/img/kampus3.jpg';

  deskripsi = `Politeknik Negeri Malang, awalnya bernama Program Pendidikan Diploma Bidang Teknik, Universitas Brawijaya, dibuka berdasarkan Surat Keputusan Dirjen DIKTI, MENDIKBUD No. 03/DJ/Kep/1979, didirikan oleh Pemerintah Indonesia melalui dana Bank Dunia dengan Tenaga Ahli dari Swiss.`;

  timeline: TimelineItem[] = [
    {
      tahun: '1982',
      judul: 'Susunan Organisasi Kampus',
      deskripsi: `Susunan Organisasi Kampus diatur melalui Keputusan Presiden Republik Indonesia No. 59 Tahun 1982, bernama Fakultas Non Gelar Teknologi, Universitas Brawijaya dan mulai menerima mahasiswa angkatan I melalui 4 (empat) jurusan, yaitu Jurusan Teknik Elektronika, Jurusan Teknik Listrik, Jurusan Teknik Mesin, dan Jurusan Teknik Sipil.`,
    },
    {
      tahun: '1986',
      judul: 'Pembukaan Jurusan Baru',
      deskripsi: `Dibuka Jurusan Teknik Telekomunikasi, Jurusan Akuntansi, dan Jurusan Administrasi Niaga. Jurusan Akuntansi dan Jurusan Administrasi Niaga mendapatkan bantuan dari The Australian Project dengan Tenaga Ahli dari Australia.`,
    },
    {
      tahun: '1987',
      judul: 'Pembukaan Jurusan Teknik Kimia',
      deskripsi: `Dibuka Jurusan Teknik Kimia.`,
    },
    {
      tahun: '1991',
      judul: 'Status Menjadi Politeknik Negeri',
      deskripsi: `Melalui Surat Keputusan MENDIKBUD No. 0313/O/1991 tentang Penataan Politeknik dalam lingkungan Universitas dan Institut Negeri, maka Politeknik Malang ditetapkan sebagai institusi yang berada di lingkungan Universitas Brawijaya dan bernama Politeknik Universitas Brawijaya yang menyelenggarakan program pendidikan Diploma III (D-III) dengan 7 (tujuh) Jurusan.`,
    },
    {
      tahun: '2004',
      judul: 'Berubah Menjadi Politeknik Negeri Malang',
      deskripsi: `Berdasarkan Surat Keputusan MENDIKNAS No. 147/O/2004, Politeknik Universitas Brawijaya telah memperoleh status kemandirian dengan nama menjadi Politeknik Negeri Malang (POLINEMA). Kemudian pada tanggal 21 September 2004 melalui Surat Keputusan Dirjen Dikti No. 3803/D/T/2004 dibuka prodi baru D4 Manajemen Rekayasa Konstruksi di Jurusan Teknik Sipil.`,
    },
    {
      tahun: '2005',
      judul: 'Pembukaan Program Studi D3 dan D4 Baru',
      deskripsi: `Pada tanggal 24 Juni 2005 melalui Surat Keputusan Dirjen Dikti No. 2001/D/T/2005 dibuka prodi baru D3 Manajemen Informatika di Jurusan Teknologi Informasi. Pada tanggal 29 Agustus 2005 melalui Surat Keputusan Dirjen Dikti No. 2964/D/T/2005 dibuka prodi baru D4 Teknik Otomotif Elektronik di Jurusan Teknik Mesin.`,
    },
    {
      tahun: '2006',
      judul: 'Pembukaan Program Studi D4 Baru',
      deskripsi: `Pada tanggal 13 Juni 2006 melalui Surat Keputusan Dirjen Dikti No. 1920/D/T/2006 dibuka prodi baru D4 Sistem Kelistrikan di Jurusan Teknik Elektro. Pada tanggal 12 Juli 2006 melalui Surat Keputusan Dirjen Dikti No. 2690/D/T/2006 dibuka prodi baru D4 Akuntansi Manajemen di Jurusan Akuntansi. Pada tanggal 8 September 2006 melalui Surat Keputusan Dirjen Dikti No. 3414/D/T/2006 dibuka prodi baru D4 Manajemen Pemasaran di Jurusan Administrasi Niaga.`,
    },
    {
      tahun: '2008',
      judul: 'Pembukaan Program Studi D4',
      deskripsi: `Pada tanggal 31 Desember 2008 melalui Surat Keputusan Dirjen Dikti No. 4679/D/T/2008 dibuka prodi baru D4 Teknik Jaringan Telekomunikasi Digital di Jurusan Teknik Elektro.`,
    },
    {
      tahun: '2009',
      judul: 'Pembukaan Program Studi D4 Teknik Elektronika',
      deskripsi: `Pada tanggal 28 Agustus 2009 melalui Surat Keputusan Dirjen Dikti No. 1522/D/T/2009 dibuka prodi baru D4 Teknik Elektronika di Jurusan Teknik Elektro.`,
    },
    {
      tahun: '2010',
      judul: 'Pembukaan Program Studi D4 Teknik Informatika',
      deskripsi: `Pada tanggal 21 Mei 2010 melalui Surat Keputusan Dirjen Dikti No. 50/D/O/2010 dibuka prodi baru D4 Teknik Informatika di Jurusan Teknologi Informasi.`,
    },
    {
      tahun: '2014',
      judul: 'Pembukaan Program Studi D4 Teknik Mesin',
      deskripsi: `Pada tanggal 29 April 2014 melalui Surat Keputusan Dirjen Dikti No. 34/E/O/2014 dibuka prodi baru D4 Teknik Mesin Produksi dan Perawatan di Jurusan Teknik Mesin.`,
    },
    {
      tahun: '2015',
      judul: 'Pembukaan Program Studi D4 Teknik Kimia',
      deskripsi: `Pada tanggal 10 Juni 2015 melalui Surat Keputusan Menristekdikti No. 381/M/KP/VI/2015 dibuka prodi baru D4 Teknologi Kimia Industri di Jurusan Teknik Kimia. Pada tanggal 18 November 2015 melalui Surat Keputusan Sekretaris Jenderal No. 120/KPT/I/2015 dibuka prodi baru D4 Keuangan di Jurusan Akuntansi.`,
    },
    {
      tahun: '2016',
      judul: 'Pembukaan Program Studi D3 dan S2',
      deskripsi: `Pada tanggal 13 September 2016 melalui Surat Keputusan Sekretaris Jenderal No. 340/KPT/I/2016 dibuka prodi baru D3 Bahasa Inggris di Jurusan Administrasi Niaga dan program S2 Magister Terapan Teknik Elektro di Jurusan Teknik Elektro.`,
    },
    {
      tahun: '2017',
      judul: 'Pembukaan Program Studi D3',
      deskripsi: `Pada tanggal 13 Juni 2017 melalui Surat Keputusan Sekretaris Jenderal No. 339/KPT/I/2017 dibuka prodi baru D3 Teknologi Konstruksi Jalan, Jembatan dan Bangunan Air di Jurusan Teknik Sipil.`,
    },
  ];
}
