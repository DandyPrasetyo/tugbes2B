import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-career',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-career.component.html',
  styleUrls: ['./header-career.component.css'],
})
export class HeaderCareerComponent {
  mobileMenuOpen = false;
  showSearch = false;
  showLanguageMenu = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  openSearch() {
    this.showSearch = true;
  }

  closeSearch() {
    this.showSearch = false;
  }

  toggleLanguage() {
    this.showLanguageMenu = !this.showLanguageMenu;
  }

  selectLanguage(lang: string) {
    console.log('Language selected:', lang);
    this.showLanguageMenu = false;
  }
}
