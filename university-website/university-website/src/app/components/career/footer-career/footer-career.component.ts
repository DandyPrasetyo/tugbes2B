import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-career',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer-career.component.html',
  styleUrls: ['./footer-career.component.css'],
})
export class FooterCareerComponent {
  currentYear = new Date().getFullYear();
}
