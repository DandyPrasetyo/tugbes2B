import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PerusahaanService } from '@services/perusahaan.service';
import { Perusahaan } from '@models/perusahaan.model';

@Component({
  selector: 'app-mitra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mitra.component.html',
  styleUrls: ['./mitra.component.css'],
})
export class MitraComponent implements OnInit {
  companies: Perusahaan[] = [];
  filtered: Perusahaan[] = [];

  // base URL logo dari backend
  logoBaseUrl = 'http://localhost:8080/uploads/logo-perusahaan/';

  constructor(
    private perusahaanService: PerusahaanService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.perusahaanService.getAll().subscribe((data) => {
      this.companies = data;
      this.filtered = data;
    });
  }

  onSearch(term: string): void {
    const t = term.toLowerCase();
    this.filtered = this.companies.filter((c) =>
      (c.nama_perusahaan || '').toLowerCase().includes(t)
    );
  }

  goDetail(id?: number): void {
    if (!id) return;
    this.router.navigate(['/career/mitra', id]);
  }

  encodeAddress(addr: string | undefined): string {
    if (!addr) return '';
    return encodeURIComponent(addr);
  }
}
