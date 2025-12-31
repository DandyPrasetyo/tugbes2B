import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hasil-seleksi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hasil-seleksi.component.html',
  styleUrls: ['./hasil-seleksi.component.css'],
})
export class HasilSeleksiComponent {
  noPeserta = '';
  searched = false;
  hasil: any = null;
  today = new Date().toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  dataHasil = [
    {
      no: '2025001',
      nama: 'Amanda Ardhelia',
      jalur: 'SNBP',
      prodi: 'D4 Teknik Informatika',
      status: 'LULUS',
    },
    {
      no: '2025002',
      nama: 'Bima Pratama',
      jalur: 'SNBT',
      prodi: 'D3 Sistem Informasi',
      status: 'TIDAK LULUS',
    },
    {
      no: '2025003',
      nama: 'Citra Ayu',
      jalur: 'Mandiri',
      prodi: 'D4 Teknik Elektronika',
      status: 'LULUS',
    },
  ];

  cekHasil() {
    this.searched = true;
    this.hasil = this.dataHasil.find((d) => d.no === this.noPeserta) || null;
  }

  print() {
    window.print();
  }
}
