import { Component, OnInit } from '@angular/core';
import { LowonganService } from '../../services/lowongan.service';
import { PerusahaanService } from '../../services/perusahaan.service';
import { Lowongan } from '../../models/lowongan.model';
import { Perusahaan } from '../../models/perusahaan.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  lowonganList: Lowongan[] = [];
  perusahaanList: Perusahaan[] = [];

  constructor(private lowonganService: LowonganService,
              private perusahaanService: PerusahaanService) {}

  ngOnInit(): void {
    this.getAllLowongan();
    this.getAllPerusahaan();
  }

  getAllLowongan() {
    this.lowonganService.getAll().subscribe(data => this.lowonganList = data);
  }

  getAllPerusahaan() {
    this.perusahaanService.getAll().subscribe(data => this.perusahaanList = data);
  }
}