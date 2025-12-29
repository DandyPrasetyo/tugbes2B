import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Organisasi {
  id: string;
  judulSection: string;
  gambar: string;
  deskripsi: string;
}

@Component({
  selector: 'app-organisasi-mahasiswa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organisasi-mahasiswa.component.html',
  styleUrls: ['./organisasi-mahasiswa.component.css'],
})
export class OrganisasiMahasiswaComponent {
  pageTitle = 'ORGANISASI & UKM';

  // Data tunggal, sama seperti sebelumnya
  organisasiList: Organisasi[] = [
    {
      id: 'bem',
      judulSection: 'BADAN EKSEKUTIF MAHASISWA',
      gambar: 'assets/img/organisasi/vvv.JPG',
      deskripsi:
        'BEM (Badan Eksekutif Mahasiswa) adalah organisasi mahasiswa di tingkat perguruan tinggi yang berfungsi sebagai lembaga eksekutif di lingkungan kampus. BEM bertugas menyalurkan aspirasi mahasiswa, menyelenggarakan kegiatan kemahasiswaan, serta menjadi penghubung antara mahasiswa dengan pihak kampus. Selain itu, BEM juga berperan dalam mengembangkan kepemimpinan, tanggung jawab sosial, serta membangun rasa solidaritas antar mahasiswa melalui berbagai kegiatan seperti seminar, pelatihan, dan event kampus lainnya.',
    },
    {
      id: 'hmti',
      judulSection: 'HIMPUNAN MAHASISWA TEKNOLOGI INFORMASI',
      gambar: 'assets/img/HMTI.jpeg',
      deskripsi:
        'Himpunan Mahasiswa Teknologi Informasi adalah organisasi mahasiswa yang berada di tingkat program studi Teknologi Informasi dan berfokus pada kegiatan internal jurusan. Berbeda dengan BEM yang mengurus seluruh mahasiswa di tingkat kampus, Himpunan Mahasiswa Teknologi Informasi hanya menaungi kegiatan di lingkungan program studi, seperti seminar, pelatihan, lomba, serta kegiatan akademik dan nonakademik yang bertujuan mengembangkan kemampuan serta mempererat kebersamaan antar mahasiswa Teknologi Informasi.',
    },
    {
      id: 'hmtro',
      judulSection: 'HIMPUNAN MAHASISWA TEKNOLOGI REKAYASA OTOMOTIF',
      gambar: 'assets/img/kemahasiswaan/hmtro.jpg',
      deskripsi:
        'Himpunan Mahasiswa Teknologi Rekayasa Otomotif fokus pada kegiatan otomotif, inovasi kendaraan, dan penelitian bidang teknik otomotif.',
    },
    {
      id: 'hmsipil',
      judulSection: 'HIMPUNAN MAHASISWA TEKNOLOGI SIPIL',
      gambar: 'assets/img/kemahasiswaan/hmsipil.jpg',
      deskripsi:
        'Himpunan Mahasiswa Teknologi Sipil mendukung pengembangan kompetensi konstruksi, survei, dan kegiatan lapangan bagi mahasiswa teknologi sipil.',
    },
    {
      id: 'hmak',
      judulSection: 'HIMPUNAN MAHASISWA AKUNTANSI',
      gambar: 'assets/img/hmak.jpeg',
      deskripsi:
        'Himpunan Mahasiswa Akuntansi adalah organisasi mahasiswa yang berada di tingkat program studi Akuntansi dan berfokus pada kegiatan internal jurusan. Berbeda dengan BEM yang mengurus seluruh mahasiswa di tingkat kampus, Himpunan Mahasiswa Akuntansi lebih menitikberatkan pada pengembangan mahasiswa dalam bidang akuntansi melalui kegiatan seperti seminar, pelatihan, lomba, dan kegiatan akademik lainnya di lingkungan program studi.',
    },
    {
      id: 'mapala',
      judulSection: 'UKM MAPALA',
      gambar: 'assets/img/mapala.jpeg',
      deskripsi:
        'UKM MAPALA (Mahasiswa Pecinta Alam) adalah Unit Kegiatan Mahasiswa yang berfokus pada kegiatan alam dan lingkungan hidup. UKM ini menjadi wadah bagi mahasiswa yang memiliki minat dalam kegiatan seperti pendakian, konservasi, penjelajahan, dan pelestarian alam. Selain itu, MAPALA juga menanamkan nilai kepedulian terhadap lingkungan, kemandirian, kerja sama tim, serta semangat cinta alam dan tanggung jawab sosial terhadap kelestarian bumi',
    },
    {
      id: 'wirausaha',
      judulSection: 'UKM KEWIRAUSAHAAN',
      gambar: 'assets/img/kwu.jpeg',
      deskripsi:
        'UKM KWU (Unit Kegiatan Mahasiswa Kewirausahaan) adalah organisasi mahasiswa di tingkat kampus yang berfokus pada pengembangan jiwa dan keterampilan kewirausahaan. UKM ini menjadi wadah bagi mahasiswa yang memiliki minat di bidang bisnis dan inovasi, dengan kegiatan seperti pelatihan, bazar, seminar, serta pengembangan produk kreatif. Tujuannya adalah membentuk mahasiswa yang mandiri, kreatif, dan memiliki kemampuan berwirausaha sejak di bangku kuliah.',
    },
    {
      id: 'albanjari',
      judulSection: 'UKM AL BANJARI',
      gambar: 'assets/img/kemahasiswaan/albanjari.jpg',
      deskripsi:
        'UKM Al Banjari berfokus pada seni hadrah/banjari dan kegiatan keagamaan untuk memperkuat nilai religius di lingkungan kampus.',
    },
  ];

  // index untuk kelompok, BUKAN index item tunggal
  currentGroupIndex = 0;
  groupSize = 2; // 2 organisasi per slide

  // hitung total kelompok, misal 8 item / 2 = 4 kelompok
  get totalGroups(): number {
    return Math.ceil(this.organisasiList.length / this.groupSize);
  }

  // ambil organisasi yang tampil di slide saat ini
  get currentGroup(): Organisasi[] {
    const start = this.currentGroupIndex * this.groupSize;
    return this.organisasiList.slice(start, start + this.groupSize);
  }

  next() {
    if (this.currentGroupIndex < this.totalGroups - 1) {
      this.currentGroupIndex++;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  prev() {
    if (this.currentGroupIndex > 0) {
      this.currentGroupIndex--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
