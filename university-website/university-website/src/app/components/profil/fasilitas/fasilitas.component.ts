import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface FacilityItem {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  category: 'gedung' | 'gedung-lain' | 'fasilitas' | 'fasilitas-lain';
}

@Component({
  selector: 'app-fasilitas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fasilitas.component.html',
  styleUrls: ['./fasilitas.component.css']
})
export class FasilitasComponent {

  /* HERO IMAGE */
  heroImage: string = 'assets/img/kampus.2.jpg';

  /* DATA – GANTI PATH GAMBAR SESUAI FILEMU */
  items: FacilityItem[] = [
    /* ====== GEDUNG UTAMA (tampil selalu) ====== */
    {
      id: 1,
      title: 'Gedung A',
      subtitle: 'Perkuliahan & Administrasi',
      image: 'assets/img/gedungA.jpeg',
      category: 'gedung'
    },
    {
      id: 2,
      title: 'Gedung B',
      subtitle: 'Perkuliahan & Laboratorium',
      image: 'assets/img/kampus12.jpeg',
      category: 'gedung'
    },
    {
      id: 3,
      title: 'Gedung C',
      subtitle: 'Ruang Kelas & Kantor',
      image: 'assets/img/gc.jpeg',
      category: 'gedung'
    },
    {
      id: 4,
      title: 'Gedung Bengkel TRO',
      subtitle: 'Workshop Teknik & Praktikum',
      image: 'assets/img/gedungC.jpeg',
      category: 'gedung'
    },

    /* ====== GEDUNG LAIN (muncul saat Selengkapnya) ====== */
    {
      id: 5,
      title: 'Gedung D',
      subtitle: 'Ruang Seminar & Aula',
      image: 'assets/images/fasilitas/gedung-d.jpg',
      category: 'gedung-lain'
    },
    {
      id: 6,
      title: 'Gedung E',
      subtitle: 'Laboratorium Terpadu',
      image: 'assets/img/gE.jpeg',
      category: 'gedung-lain'
    },
    {
      id: 7,
      title: 'Gedung Serba Guna',
      subtitle: 'Kegiatan Mahasiswa & Acara Kampus',
      image: 'assets/img/rk.jpeg',
      category: 'gedung-lain'
    },

    /* ====== FASILITAS UTAMA (Perpus, Kantin, Parkir, dll) ====== */
    {
      id: 20,
      title: 'Perpustakaan',
      subtitle: 'Koleksi buku dan referensi digital',
      image: 'assets/img/perpus1.jpeg',
      category: 'fasilitas'
    },
    {
      id: 21,
      title: 'Kantin',
      subtitle: 'Area makan mahasiswa & dosen',
      image: 'assets/img/kantin.jpg',
      category: 'fasilitas'
    },
    {
      id: 22,
      title: 'Area Parkir GD. B',
      subtitle: 'Kapasitas kendaraan roda dua & empat',
      image: 'assets/img/parkir1.jpeg',
      category: 'fasilitas'
    },

    /* ====== FASILITAS LAIN (muncul saat Selengkapnya) ====== */
    {
      id: 30,
      title: 'Ruang Dosen',
      subtitle: 'Ruang kerja dan konsultasi',
      image: 'assets/images/fasilitas/ruang-dosen.jpg',
      category: 'fasilitas-lain'
    },
    {
      id: 31,
      title: 'Mushola',
      subtitle: 'Tempat ibadah mahasiswa & civitas',
      image: 'assets/images/fasilitas/mushola.jpg',
      category: 'fasilitas-lain'
    },
    {
      id: 32,
      title: 'Lab A',
      subtitle: 'Laboratorium Komputer A',
      image: 'assets/images/fasilitas/lab-a.jpg',
      category: 'fasilitas-lain'
    },
    {
      id: 33,
      title: 'Lab B',
      subtitle: 'Laboratorium Komputer B',
      image: 'assets/images/fasilitas/lab-b.jpg',
      category: 'fasilitas-lain'
    },
    {
      id: 34,
      title: 'Lab C',
      subtitle: 'Laboratorium Komputer C',
      image: 'assets/images/fasilitas/lab-c.jpg',
      category: 'fasilitas-lain'
    },
    {
      id: 35,
      title: 'Toilet',
      subtitle: 'Fasilitas sanitasi yang terjaga',
      image: 'assets/images/fasilitas/toilet.jpg',
      category: 'fasilitas-lain'
    }
  ];

  /* STATE: toggle selengkapnya */
  showMoreBuildings = false;
  showMoreFacilities = false;

  /* GETTER UNTUK TEMPLATE */
  get mainBuildings(): FacilityItem[] {
    return this.items.filter(i => i.category === 'gedung');
  }

  get extraBuildings(): FacilityItem[] {
    return this.items.filter(i => i.category === 'gedung-lain');
  }

  get mainFacilities(): FacilityItem[] {
    return this.items.filter(i => i.category === 'fasilitas');
  }

  get extraFacilities(): FacilityItem[] {
    return this.items.filter(i => i.category === 'fasilitas-lain');
  }

  /* INTERAKSI */
  toggleMoreBuildings(): void {
    this.showMoreBuildings = !this.showMoreBuildings;
  }

  toggleMoreFacilities(): void {
    this.showMoreFacilities = !this.showMoreFacilities;
  }
}
