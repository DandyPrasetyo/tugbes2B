import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface JadwalCell {
  matkul: string;
  dosen: string;
  tempat: string;
  ruang: string;               // ✅ ditambahkan (dipakai HTML)
  asal: 'PSDKU' | 'Pusat';     // ✅ ditambahkan (dipakai HTML)
  mode: 'Online' | 'Offline';
}

interface JadwalHari {
  hari: string;
  jam: JadwalCell[];
}

interface JadwalKelas {
  kelas: string;
  jadwal: JadwalHari[];
}

interface Prodi {
  kode: string;
  nama: string;
  gambar: string;
  jadwal: JadwalKelas[];
}

@Component({
  selector: 'app-jadwal-kuliah',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jadwal-kuliah.component.html',
  styleUrls: ['./jadwal-kuliah.component.css']
})
export class JadwalKuliahComponent {

  search = '';
  selectedProdi: Prodi | null = null;
  selectedKelas: JadwalKelas | null = null;

  // ======================
  // JAM KULIAH (07.00–16.20)
  // ======================
  jamList = [
    '07.00-08.40',
    '08.40-10.20',
    '10.20-12.00',
    '13.00-14.40',
    '14.40-16.20'
  ];

  // ======================
  // MATA KULIAH PER PRODI & TINGKAT
  // ======================
  matkulMap: any = {
    TI: {
      1: [
        'Pengantar TI','Algoritma Dasar','Logika Informatika',
        'Matematika Diskrit','Sistem Komputer',
        'Pancasila','Kewarganegaraan','Bahasa Indonesia','Etika Profesi'
      ],
      2: [
        'Basis Data','Pemrograman Web','Struktur Data',
        'Sistem Operasi','Jaringan Komputer',
        'UI/UX','OOP','Statistika','Bahasa Inggris'
      ],
      3: [
        'RPL','Keamanan Sistem','Mobile Programming',
        'Cloud Computing','Data Mining',
        'Manajemen Proyek TI','IoT','AI Dasar','Technopreneurship'
      ]
    },
    TS: {
      1: [
        'Pengantar Teknik Sipil','Gambar Teknik','Matematika Teknik',
        'Fisika Teknik','K3','Pancasila',
        'Bahasa Indonesia','Kewarganegaraan','Etika Profesi'
      ],
      2: [
        'Mekanika Teknik','Statika','Bahan Bangunan',
        'Hidrolika','Ilmu Ukur Tanah',
        'Struktur Beton','Bahasa Inggris','Manajemen Konstruksi','K3 Lanjut'
      ],
      3: [
        'Struktur Baja','Perencanaan Jalan','Drainase',
        'Geoteknik','Manajemen Proyek',
        'Estimasi Biaya','AMDAL','Metodologi Penelitian','Kewirausahaan'
      ]
    },
    TRO: {
      1: [
        'Dasar Otomotif','Gambar Teknik Otomotif','Matematika Teknik',
        'Fisika','K3','Pancasila',
        'Bahasa Indonesia','Kewarganegaraan','Etika Profesi'
      ],
      2: [
        'Motor Bensin','Motor Diesel','Kelistrikan Kendaraan',
        'Chassis','Transmisi','Sistem Pendingin',
        'Bahasa Inggris','Diagnostik Kendaraan','Workshop'
      ],
      3: [
        'Manajemen Bengkel','Teknologi Hybrid',
        'Engine Management','Quality Control',
        'Produksi Otomotif','Teknologi Otomotif Modern',
        'Metodologi Penelitian','Technopreneurship','Kewirausahaan'
      ]
    },
    AK: {
      1: [
        'Pengantar Akuntansi','Matematika Ekonomi','Pengantar Bisnis',
        'Pancasila','Bahasa Indonesia',
        'Kewarganegaraan','Etika Profesi','Aplikasi Perkantoran','Statistika'
      ],
      2: [
        'Akuntansi Keuangan','Akuntansi Biaya','Perpajakan',
        'SIA','Akuntansi Manajemen','Auditing',
        'Bahasa Inggris','Ekonomi Makro','Analisis Laporan Keuangan'
      ],
      3: [
        'Audit Lanjut','Akuntansi Sektor Publik','Manajemen Keuangan',
        'Perencanaan Pajak','Akuntansi Internasional',
        'Etika Bisnis','Metodologi Penelitian','Kewirausahaan','Technopreneurship'
      ]
    }
  };

  // ======================
  // DOSEN PSDKU & PUSAT
  // ======================
  dosenMap: any = {
    TI: {
      psdku: [
        'Ahmad Fauzi, M.Kom.',
        'Rina Kurnia, S.Kom., M.T.',
        'Budi Santoso, M.Kom.',
        'Dewi Lestari, S.Kom.'
      ],
      pusat: [
        'Dr. Andi Putra, M.Kom.',
        'Prof. Sari Ningsih, Ph.D.'
      ]
    },
    TS: {
      psdku: [
        'Agus Pratama, M.T.',
        'Siti Aminah, S.T., M.T.',
        'Rizki Maulana, M.T.',
        'Dian Puspitasari, M.T.'
      ],
      pusat: [
        'Ir. Bambang Sutrisno, M.T.',
        'Dr. Hadi Wiyono, M.T.'
      ]
    },
    TRO: {
      psdku: [
        'Fajar Pratama, S.T., M.T.',
        'Dedi Kurniawan, M.T.',
        'Rizal Firmansyah, S.T.',
        'Arief Nugroho, M.T.'
      ],
      pusat: [
        'Ir. Bima Seno, M.T.',
        'Dr. Yudi Hartono, M.T.'
      ]
    },
    AK: {
      psdku: [
        'Nina Lestari, S.E., M.Ak.',
        'Agung Prakoso, S.E., M.Ak.',
        'Rudi Hartono, S.E., M.Ak.',
        'Maya Putri, S.E.'
      ],
      pusat: [
        'Dr. Maya Sari, M.Ak.',
        'Prof. Indra Wijaya, Ph.D.'
      ]
    }
  };

  // ======================
  // DATA PRODI
  // ======================
  prodiList: Prodi[] = [
    { kode: 'TI', nama: 'Teknologi Informasi', gambar: 'assets/jadwal-preview.png', jadwal: this.generateKelas('TI') },
    { kode: 'TS', nama: 'Teknologi Sipil', gambar: 'assets/jadwal-preview.png', jadwal: this.generateKelas('TS') },
    { kode: 'TRO', nama: 'Teknologi Rekayasa Otomotif', gambar: 'assets/jadwal-preview.png', jadwal: this.generateKelas('TRO') },
    { kode: 'AK', nama: 'Akuntansi', gambar: 'assets/jadwal-preview.png', jadwal: this.generateKelas('AK') }
  ];

  get filteredProdi() {
    return this.prodiList.filter(p =>
      p.nama.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  // ======================
  // GENERATE JADWAL (5 HARI)
  // ======================
  generateKelas(kodeProdi: string): JadwalKelas[] {
    const kelasList = ['1A','1B','2A','2B','3A','3B'];
    const hariList = ['Senin','Selasa','Rabu','Kamis','Jumat'];

    const dosenPSD = this.dosenMap[kodeProdi].psdku;
    const dosenPusat = this.dosenMap[kodeProdi].pusat;
    const dosenGabungan = [...dosenPSD, ...dosenPusat];

    return kelasList.map(kelas => {
      const tingkat = parseInt(kelas.charAt(0));
      const matkul = this.matkulMap[kodeProdi][tingkat];
      let index = 0;

      return {
        kelas,
        jadwal: hariList.map(hari => {
          const jumlah = 2 + Math.floor(Math.random() * 3);

          return {
            hari,
            jam: this.jamList.map((_, i) => {
              if (i < jumlah) {
                const dosen = dosenGabungan[index % dosenGabungan.length];
                const isPusat = dosenPusat.includes(dosen);

                const ruang =
                  /Lab|Workshop|Diagnostik|Engine|Otomotif|Basis/i.test(matkul[index % matkul.length])
                    ? 'Lab'
                    : 'Kelas';

                const cell: JadwalCell = {
                  matkul: matkul[index % matkul.length],
                  dosen,
                  tempat: ruang,
                  ruang: ruang,
                  asal: isPusat ? 'Pusat' : 'PSDKU',
                  mode: isPusat ? 'Online' : 'Offline'
                };

                index++;
                return cell;
              }

              return {
                matkul: '',
                dosen: '',
                tempat: '',
                ruang: '',
                asal: 'PSDKU',
                mode: 'Offline'
              };
            })
          };
        })
      };
    });
  }

  pilihProdi(p: Prodi) {
    this.selectedProdi = p;
    this.selectedKelas = null;
  }

  pilihKelas(k: JadwalKelas) {
    this.selectedKelas = k;
  }

  kembali() {
    this.selectedProdi = null;
    this.selectedKelas = null;
  }

  exportExcel() {
    alert('Export Excel (dummy)');
  }
}
