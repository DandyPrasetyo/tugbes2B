export interface Perusahaan {
  perusahaanId?: number;
  nama_perusahaan: string;
  alamat: string;
  email: string;
  no_telp?: number;
  deskripsi?: string;
  website?: string;
  logo?: string | null;

  latitude?: number;    // ⬅️ TAMBAH
  longitude?: number;   // ⬅️ TAMBAH

  createdAt?: string;
  updatedAt?: string;
}
