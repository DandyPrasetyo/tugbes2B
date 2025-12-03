export interface Lowongan {
  lowongan_id?: number;
  admin_id: number;
  perusahaan_id: number;
  judul_lowongan: string;
  posisi: string;
  deskripsi?: string;
  flayer?: string;
  tipe_pekerjaan: 'Full-time' | 'Part-time' | 'Magang';
  gaji?: number;
  batas_tanggal: string;
  status: 'Aktif' | 'Tutup';
  created_at?: string;
  updated_at?: string;
}
