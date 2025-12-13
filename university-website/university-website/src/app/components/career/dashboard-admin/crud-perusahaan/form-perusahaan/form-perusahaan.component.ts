import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PerusahaanService } from '@services/perusahaan.service';
import { Perusahaan } from '@models/perusahaan.model';

@Component({
  selector: 'app-form-perusahaan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-perusahaan.component.html',
  styleUrls: ['./form-perusahaan.component.css'],
})
export class FormPerusahaanComponent implements OnInit {
  perusahaan: Perusahaan = {
    nama_perusahaan: '',
    alamat: '',
    email: '',
    no_telp: undefined,   // angka atau kosong
    deskripsi: '',
    website: '',
    // pastikan model punya field logo?: string;
  };

  isEdit = false;
  id = 0;

  // ========= LOGO STATE =========
  selectedLogoFile: File | null = null;
  selectedLogoName: string | null = null;
  logoPreviewUrl: string | null = null;
  logoError: string | null = null;

  constructor(
    private perusahaanService: PerusahaanService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    this.id = param ? Number(param) : 0;

    if (this.id) {
      this.isEdit = true;
      this.loadDetail();
    }
  }

  loadDetail(): void {
    this.perusahaanService.getById(this.id).subscribe({
      next: (res: any) => {
        this.perusahaan = res;

        // jika sudah ada logo tersimpan, tampilkan sebagai preview awal
        if (this.perusahaan.logo) {
          // sesuaikan base URL dengan cara backend melayani file logo
          this.logoPreviewUrl =
            `http://localhost:8080/uploads/logo-perusahaan/${this.perusahaan.logo}`;
        }
      },
      error: (err: any) => {
        console.error('Gagal memuat detail perusahaan:', err);
        alert('Gagal memuat data perusahaan');
        this.router.navigate(['/career/admin/perusahaan']);
      },
    });
  }

  // ========= EVENT PILIH LOGO =========
  onLogoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    this.logoError = null;

    // Validasi tipe file
    const allowedTypes = [
      'image/png',
      'image/jpeg',
      'image/jpg',
      'image/svg+xml',
      'image/gif',
      'image/webp',
    ];
    if (!allowedTypes.includes(file.type)) {
      this.logoError =
        'Format logo tidak didukung. Gunakan PNG, JPG, JPEG, SVG, GIF, atau WebP.';
      this.selectedLogoFile = null;
      this.selectedLogoName = null;
      this.logoPreviewUrl = null;
      return;
    }

    // Validasi ukuran maks 2MB
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      this.logoError = 'Ukuran logo maksimal 2MB.';
      this.selectedLogoFile = null;
      this.selectedLogoName = null;
      this.logoPreviewUrl = null;
      return;
    }

    this.selectedLogoFile = file;
    this.selectedLogoName = file.name;

    // Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.logoPreviewUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  // Optional: dipakai tombol "Ganti logo" di HTML
  triggerLogoInput(): void {
    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement | null;
    if (input) {
      input.click();
    }
  }

  removeLogo(): void {
    this.selectedLogoFile = null;
    this.selectedLogoName = null;
    this.logoPreviewUrl = null;
    this.logoError = null;

    // jika ingin benar‑benar hapus logo di backend,
    // di sini bisa panggil service khusus delete-logo nanti.
  }

  // ========= CALL API UPLOAD LOGO =========
  private uploadLogoIfAny(perusahaanId: number): void {
    if (!this.selectedLogoFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedLogoFile);

    this.perusahaanService.uploadLogo(perusahaanId, formData).subscribe({
      next: () => {
        // tidak perlu alert terpisah biar tidak berisik
      },
      error: (err: any) => {
        console.error('Gagal upload logo:', err);
        alert('Data perusahaan tersimpan, tetapi upload logo gagal.');
      },
    });
  }

  save(): void {
    if (this.isEdit) {
      this.perusahaanService.update(this.id, this.perusahaan).subscribe({
        next: (res: any) => {
          // res.data = Perusahaan
          const perusahaanId = res.data?.id ?? this.id;
          this.uploadLogoIfAny(perusahaanId);

          alert('Perusahaan berhasil diperbarui');
          this.router.navigate(['/career/admin/perusahaan']);
        },
        error: (err: any) => {
          console.error('Gagal update perusahaan:', err);
          alert('Gagal update perusahaan');
        },
      });
    } else {
      this.perusahaanService.create(this.perusahaan).subscribe({
        next: (res: any) => {
          const perusahaanId = res.data?.id;
          this.uploadLogoIfAny(perusahaanId);

          alert('Perusahaan berhasil ditambahkan');
          this.router.navigate(['/career/admin/perusahaan']);
        },
        error: (err: any) => {
          console.error('Gagal tambah perusahaan:', err);
          alert('Gagal tambah perusahaan');
        },
      });
    }
  }
}
