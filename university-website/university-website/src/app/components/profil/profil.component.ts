import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  // PERSIS GAMBAR 3: 7-47-10-8
  stats = [
    { value: '7', label: 'Jurusan' },
    { value: '47', label: 'Program Studi' },
    { value: '10', label: 'Kelas Internasional' },
    { value: '8', label: 'Program Joint Degree' }
  ];

  // PERSIS GAMBAR 4: 5 Prestasi
  prestasiList = [
    { title: 'Vokasi Terbaik 2022', rank: 'Rank #1' },
    { title: 'UI GreenMetric', rank: 'Rank #751' },
    { title: 'Pencapaian Internasional', rank: '100 +' },
    { title: 'Pencapaian Nasional', rank: '500 +' },
    { title: 'Pencapaian Regional', rank: '1.000 +' }
  ];
}
