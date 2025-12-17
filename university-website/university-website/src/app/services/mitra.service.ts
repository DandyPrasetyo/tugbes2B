import { Injectable } from '@angular/core';
import { Mitra } from '../models/mitra.model';

@Injectable({
  providedIn: 'root'
})
export class MitraService {

  constructor() { }

  // ===============================
  // DATA MITRA (CONTOH / MOCK DATA)
  // ===============================
  private mitraList: Mitra[] = [
    {
      id: 1,
      nama: 'PT Pertamina (Persero)',
      logo: 'assets/mitra/pertamina.png',
      deskripsi:
        'PT Pertamina (Persero) adalah perusahaan energi nasional milik negara yang bergerak di bidang eksplorasi, produksi, pengolahan, dan distribusi energi.',
      bentukKerjasama:
        'Program magang mahasiswa, rekrutmen lulusan, dan pengembangan kompetensi industri.',
      lamaKerjasama: '2019 – Sekarang',
      alamat:
        'Jl. Medan Merdeka Timur No. 11-13, Jakarta Pusat, Indonesia',
      email: 'infopublik@pertamina.com',
      telepon: '135',
      website: 'https://pertamina.com'
    },
    {
      id: 2,
      nama: 'PT Indosat Tbk',
      logo: 'assets/mitra/indosat.png',
      deskripsi:
        'PT Indosat Tbk merupakan perusahaan telekomunikasi dan digital yang menyediakan layanan komunikasi seluler dan data.',
      bentukKerjasama:
        'Kerja sama magang, kuliah tamu, sertifikasi industri, dan penyerapan lulusan.',
      lamaKerjasama: '2020 – Sekarang',
      alamat:
        'Jl. Medan Merdeka Barat No. 21, Jakarta Pusat, Indonesia',
      email: 'care@im3.id',
      telepon: '185',
      website: 'https://im3.id'
    }
  ];

  // ===============================
  // METHOD AMBIL SEMUA MITRA
  // ===============================
  getAllMitra(): Mitra[] {
    return this.mitraList;
  }

  // ===============================
  // METHOD AMBIL MITRA BERDASARKAN ID
  // ===============================
  getMitraById(id: number): Mitra | undefined {
    return this.mitraList.find(mitra => mitra.id === id);
  }
}
