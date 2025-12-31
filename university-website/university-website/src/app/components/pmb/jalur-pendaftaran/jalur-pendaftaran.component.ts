import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-jalur-pendaftaran',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jalur-pendaftaran.component.html',
  styleUrls: ['./jalur-pendaftaran.component.css'],
})
export class JalurPendaftaranComponent {
  jalurList = [
    {
      kode: 'snbp',
      nama: 'SNBP',
      deskripsi: 'Seleksi Nasional Berdasarkan Prestasi',
      type: 'portal',
      link: 'https://snpmb.bppp.kemdikbud.go.id',
    },
    {
      kode: 'snbt',
      nama: 'SNBT',
      deskripsi: 'Seleksi Nasional Berdasarkan Tes (UTBK)',
      type: 'portal',
      link: 'https://snpmb.bppp.kemdikbud.go.id',
    },
    {
      kode: 'mandiri-polinema',
      nama: 'Mandiri Polinema',
      deskripsi: 'Seleksi mandiri yang diselenggarakan Polinema',
      type: 'detail',
    },
    {
      kode: 'mandiri-konsorsium',
      nama: 'Mandiri Konsorsium',
      deskripsi:
        'Seleksi mandiri bersama Politeknik Negeri se-Indonesia (SM-KPN)',
      type: 'detail',
    },
  ];
}
