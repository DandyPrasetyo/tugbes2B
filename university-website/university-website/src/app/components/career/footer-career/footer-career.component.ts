import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-career',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="career-footer">
      <p>&copy; 2025 Career Center. All rights reserved.</p>
    </footer>
  `,
  styleUrls: ['./footer-career.component.css'],
})
export class FooterCareerComponent {}
