export interface Lowongan {
  lowonganId?: number;
  adminId: number;
  perusahaanId: number;
  judulLowongan: string;
  posisi: string;
  // === FIELD BARU LOKASI ===
  lokasi?: string;
  deskripsi?: string;
  flayer?: string;
  tipePekerjaan: 'Full_time' | 'Part_time' | 'Magang';
  gaji?: number;
  batasTanggal: string;
  status: 'Aktif' | 'Tutup';
  createdAt?: string;
  updatedAt?: string;
}
