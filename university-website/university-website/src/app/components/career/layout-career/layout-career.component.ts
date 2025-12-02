import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderCareerComponent } from '../header-career/header-career.component';
import { FooterCareerComponent } from '../footer-career/footer-career.component';

@Component({
  selector: 'app-career-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderCareerComponent, FooterCareerComponent],
  templateUrl: './layout-career.component.html',
  styleUrls: ['./layout-career.component.css'],
})
export class CareerLayoutComponent {}