import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <div class="text-xl font-bold text-blue-600">
            POLITEKNIK NEGERI MALANG
          </div>
          
          <!-- Navigation Menu -->
          <nav class="hidden md:flex space-x-8">
            <a routerLink="/" class="text-gray-700 hover:text-blue-600 font-medium">BERANDA</a>

            <a routerLink="/profil" class="text-gray-700 hover:text-blue-600 font-medium">PROFIL</a>
            
            <a routerLink="/akademik" class="text-gray-700 hover:text-blue-600 font-medium">AKADEMIK</a>
            <a routerLink="/kemahasiswaan" class="text-gray-700 hover:text-blue-600 font-medium">KEMAHASISWAAN</a>
            <a routerLink="/pmb" class="text-gray-700 hover:text-blue-600 font-medium">PMB</a>
            <a routerLink="/career" class="text-gray-700 hover:text-blue-600 font-medium">CAREER</a>
            <a routerLink="/contact" class="text-gray-700 hover:text-blue-600 font-medium">CONTACT</a>
          </nav>

          <!-- Mobile menu button -->
          <button class="md:hidden" (click)="toggleMobileMenu()">
            ☰
          </button>
        </div>

        <!-- Mobile menu -->
        <div class="md:hidden" [class.hidden]="!mobileMenuOpen">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <a routerLink="/" class="block px-3 py-2 text-gray-700 hover:text-blue-600" (click)="closeMobileMenu()">BERANDA</a>
            <a routerLink="/profil" class="block px-3 py-2 text-gray-700 hover:text-blue-600" (click)="closeMobileMenu()">PROFIL</a>
            <a routerLink="/akademik" class="block px-3 py-2 text-gray-700 hover:text-blue-600" (click)="closeMobileMenu()">AKADEMIK</a>
            <a routerLink="/kemahasiswaan" class="block px-3 py-2 text-gray-700 hover:text-blue-600" (click)="closeMobileMenu()">KEMAHASISWAAN</a>
            <a routerLink="/pmb" class="block px-3 py-2 text-gray-700 hover:text-blue-600" (click)="closeMobileMenu()">PMB</a>
            <a routerLink="/career" class="block px-3 py-2 text-gray-700 hover:text-blue-600" (click)="closeMobileMenu()">CAREER</a>
            
            <a routerLink="/contact" class="block px-3 py-2 text-gray-700 hover:text-blue-600" (click)="closeMobileMenu()">CONTACT</a>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}