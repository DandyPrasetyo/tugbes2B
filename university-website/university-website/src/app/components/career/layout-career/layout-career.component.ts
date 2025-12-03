import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderCareerComponent } from '../header-career/header-career.component';
import { FooterCareerComponent } from '../footer-career/footer-career.component';

@Component({
  selector: 'app-career-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    HeaderCareerComponent,
    FooterCareerComponent,
  ],
  templateUrl: './layout-career.component.html',
  styleUrls: ['./layout-career.component.css'],
})
export class CareerLayoutComponent {}
