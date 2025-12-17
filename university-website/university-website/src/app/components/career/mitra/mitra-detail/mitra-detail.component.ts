import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { PerusahaanService } from '@services/perusahaan.service';
import { Perusahaan } from '@models/perusahaan.model';

@Component({
  selector: 'app-mitra-detail',
  standalone: true,
  imports: [CommonModule, RouterModule], // ⬅️ WAJIB
  templateUrl: './mitra-detail.component.html',
  styleUrls: ['./mitra-detail.component.css'],
})
export class MitraDetailComponent implements OnInit {

  perusahaan?: Perusahaan;

  logoBaseUrl = 'http://localhost:8080/uploads/logo-perusahaan/';

  constructor(
    private route: ActivatedRoute,
    private perusahaanService: PerusahaanService,
    private sanitizer: DomSanitizer // ⬅️ DITAMBAHKAN
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.perusahaanService.getById(id).subscribe({
      next: (data) => {
        this.perusahaan = data;
      },
      error: (err) => {
        console.error('Gagal load detail perusahaan', err);
      }
    });
  }

  /* ================================================= */
  /* MAPS BERDASARKAN ALAMAT (AMAN & TANPA ERROR)      */
  /* ================================================= */

  getMapsLink(): string {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      this.perusahaan?.alamat || ''
    )}`;
  }

  getMapsImage(): string {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(
      this.perusahaan?.alamat || ''
    )}&zoom=15&size=600x300&markers=color:red%7C${encodeURIComponent(
      this.perusahaan?.alamat || ''
    )}`;
  }

  /* ================================================= */
  /* MAPS AKURAT (PRIORITAS LATITUDE & LONGITUDE)     */
  /* KODE LAMA TETAP ADA                              */
  /* ================================================= */

  getMapsEmbedAccurate(): string {
    if ((this.perusahaan as any)?.latitude && (this.perusahaan as any)?.longitude) {
      return `https://www.google.com/maps?q=${
        (this.perusahaan as any).latitude
      },${
        (this.perusahaan as any).longitude
      }&output=embed`;
    }

    return `https://www.google.com/maps?q=${encodeURIComponent(
      this.perusahaan?.alamat || ''
    )}&output=embed`;
  }

  getMapsLinkAccurate(): string {
    if ((this.perusahaan as any)?.latitude && (this.perusahaan as any)?.longitude) {
      return `https://www.google.com/maps?q=${
        (this.perusahaan as any).latitude
      },${
        (this.perusahaan as any).longitude
      }`;
    }

    return this.getMapsLink();
  }

  /* ================================================= */
  /* MAPS EMBED AMAN (ANTI NG0904)                    */
  /* METHOD BARU — TIDAK MERUSAK YANG LAMA            */
  /* ================================================= */

  getSafeMapsEmbed(): SafeResourceUrl {
    const url = this.getMapsEmbedAccurate();
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
