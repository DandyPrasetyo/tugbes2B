export interface Perusahaan {
  perusahaanId?: number;      // ← ganti nama field
  nama_perusahaan: string;
  alamat: string;
  email: string;
  no_telp?: string;
  deskripsi?: string;
  website?: string;
  created_at?: string;
  updated_at?: string;
}
