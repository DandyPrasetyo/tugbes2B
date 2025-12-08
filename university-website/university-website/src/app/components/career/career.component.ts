import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit {
  currentSlide = 0;
  slides = ['kampus5.jpg', 'kampus2.jpg', 'kampus3.jpg'];

  ngOnInit(): void {
    // sementara KOSONG, tidak ada setInterval
  }
}
