import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  mobileMenuOpen = false;

  navigation = [
    { name: 'BRANDA', path: '/' },
    { name: 'PROFIL', path: '/profil' },
    { name: 'AKADEMIK', path: '/akademik' },
    { name: 'KEMAHASISWAAN', path: '/kemahasiswaan' },
    { name: 'PMB', path: '/pmb' },
    { name: 'CARRER', path: '/career' },
    { name: 'CONTACT', path: '/contact' },
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}