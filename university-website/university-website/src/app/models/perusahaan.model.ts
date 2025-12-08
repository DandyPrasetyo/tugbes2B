export interface Perusahaan {
  perusahaanId?: number;
  nama_perusahaan: string;
  alamat: string;
  email: string;
  no_telp?: number;
  deskripsi?: string;
  website?: string;
  logo?: string | null;   // path / URL logo
  createdAt?: string;
  updatedAt?: string;
}
