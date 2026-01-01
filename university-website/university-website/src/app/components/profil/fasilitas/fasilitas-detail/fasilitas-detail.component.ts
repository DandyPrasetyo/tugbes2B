import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface FacilityDetail {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-fasilitas-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fasilitas-detail.component.html',
  styleUrls: ['./fasilitas-detail.component.css']
})
export class FasilitasDetailComponent implements OnInit {

  item: FacilityDetail | null = null;

  // ===== DATA DETAIL (SAMAKAN id & path gambar DENGAN LIST FASILITAS) =====
  data: FacilityDetail[] = [
    {
      id: 1,
      title: 'Gedung A',
      subtitle: 'Perkuliahan & Administrasi',
      image: 'assets/img/gedungA.jpeg',
      description:
        'Gedung A digunakan untuk kegiatan perkuliahan dan layanan administrasi akademik. ' +
        'Ruang kelas dilengkapi fasilitas multimedia sehingga proses belajar mengajar berjalan efektif dan nyaman.'
    },
    {
      id: 2,
      title: 'Gedung B',
      subtitle: 'Perkuliahan & Laboratorium',
      image: 'assets/img/kampus12.jpeg',
      description:
        'Gedung B menampung beberapa laboratorium dan ruang kuliah terintegrasi. ' +
        'Mahasiswa dapat melakukan praktikum dan riset terapan dengan dukungan sarana komputer dan peralatan penunjang.'
    },
    {
      id: 3,
      title: 'Gedung C',
      subtitle: 'Ruang Kelas & Kantor',
      image: 'assets/img/gc.jpeg',
      description:
        'Gedung C berisi ruang perkuliahan, ruang dosen, dan beberapa unit layanan administrasi. ' +
        'Penataan ruang dibuat agar interaksi antara dosen dan mahasiswa lebih mudah dan nyaman.'
    },
    {
      id: 4,
      title: 'Gedung Bengkel TRO',
      subtitle: 'Workshop Teknik & Praktikum',
      image: 'assets/img/gedungC.jpeg',
      description:
        'Bengkel Teknologi Rekayasa Otomotif (TRO) merupakan fasilitas praktikum untuk pembelajaran berbasis praktik. ' +
        'Dilengkapi berbagai perangkat, mesin, dan unit kendaraan yang mendukung kegiatan perawatan, perbaikan, pengujian, ' +
        'serta analisis sistem otomotif sehingga mahasiswa dapat mengasah keterampilan teknis secara langsung.'
    },
    {
      id: 20,
      title: 'Perpustakaan',
      subtitle: 'Koleksi buku dan referensi digital',
      image: 'assets/img/perpus1.jpeg',
      description:
        'Perpustakaan menyediakan koleksi buku, jurnal, dan sumber belajar digital. ' +
        'Ruang baca yang nyaman membuat mahasiswa dan dosen dapat belajar, berdiskusi, dan mengerjakan tugas dengan fokus.'
    },
    {
      id: 21,
      title: 'Kantin',
      subtitle: 'Area makan dan istirahat',
      image: 'assets/img/kantin.jpg',
      description:
        'Kantin kampus menyediakan berbagai pilihan makanan dan minuman dengan harga terjangkau. ' +
        'Area kantin dirancang sebagai tempat istirahat dan berkumpul bagi mahasiswa di sela-sela perkuliahan.'
    },
    {
      id: 22,
      title: 'Area Parkir GD. B',
      subtitle: 'Parkir kendaraan mahasiswa & dosen',
      image: 'assets/img/parkir1.jpeg',
      description:
        'Area parkir Gedung B mampu menampung kendaraan roda dua maupun roda empat. ' +
        'Penataan jalur keluar-masuk dibuat agar lalu lintas di lingkungan kampus tetap tertib dan aman.'
    },
    {
      id: 30,
      title: 'Ruang Dosen',
      subtitle: 'Ruang kerja & konsultasi',
      image: 'assets/images/fasilitas/ruang-dosen.jpg',
      description:
        'Ruang dosen digunakan sebagai tempat kerja, penyusunan materi ajar, serta konsultasi akademik bagi mahasiswa. ' +
        'Suasana ruang diatur agar kondusif untuk berdiskusi dan bimbingan.'
    },
    {
      id: 31,
      title: 'Mushola',
      subtitle: 'Tempat ibadah kampus',
      image: 'assets/images/fasilitas/mushola.jpg',
      description:
        'Mushola kampus menyediakan fasilitas ibadah yang bersih dan nyaman. ' +
        'Mahasiswa dan civitas akademika dapat melaksanakan ibadah harian di sela-sela aktivitas perkuliahan.'
    },
    {
      id: 32,
      title: 'Lab A',
      subtitle: 'Laboratorium Komputer A',
      image: 'assets/images/fasilitas/lab-a.jpg',
      description:
        'Lab A dilengkapi perangkat komputer dan jaringan yang digunakan untuk praktikum pemrograman, jaringan, dan aplikasi lainnya.'
    },
    {
      id: 33,
      title: 'Lab B',
      subtitle: 'Laboratorium Komputer B',
      image: 'assets/images/fasilitas/lab-b.jpg',
      description:
        'Lab B mendukung praktikum berbagai mata kuliah yang membutuhkan komputer dengan spesifikasi menengah ke atas.'
    },
    {
      id: 34,
      title: 'Lab C',
      subtitle: 'Laboratorium Komputer C',
      image: 'assets/images/fasilitas/lab-c.jpg',
      description:
        'Lab C dimanfaatkan untuk praktikum lanjutan dan pengembangan proyek mahasiswa, terutama di bidang pemrograman dan jaringan.'
    },
    {
      id: 35,
      title: 'Toilet',
      subtitle: 'Fasilitas sanitasi',
      image: 'assets/images/fasilitas/toilet.jpg',
      description:
        'Fasilitas toilet di kampus dijaga kebersihannya secara berkala agar nyaman digunakan oleh seluruh sivitas akademika.'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;

    if (id != null) {
      this.item = this.data.find(d => d.id === id) || null;
    }
  }
}
