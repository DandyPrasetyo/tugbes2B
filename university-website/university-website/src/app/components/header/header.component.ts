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
          
          <!-- Navigation Menu (desktop) -->
          <nav class="hidden md:flex space-x-8 items-center">
            <a routerLink="/" class="text-gray-700 hover:text-blue-600 font-medium" (click)="closeProfil()">
  BERANDA
</a>

            <!-- PROFIL DROPDOWN (desktop, klik) -->
            <div class="relative">
              <button
                type="button"
                class="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium"
                (click)="toggleProfil()"
              >
                <span>PROFIL</span>
                <span class="text-xs" [class.rotate-180]="profilOpen">▼</span>
              </button>

              <!-- Dropdown content -->
              <div
                *ngIf="profilOpen"
                class="absolute left-1/2 -translate-x-1/2 mt-3
                       w-[360px] rounded-3xl bg-white shadow-2xl
                       ring-1 ring-black/5 transition duration-150"
              >
                <ul class="py-4 space-y-2 text-base text-gray-700">
                  <li>
                    <a routerLink="/profil" class="block px-6 py-1 hover:bg-gray-100" (click)="closeProfil()">
                      Profil
                    </a>
                  </li>
                  <li>
                    <a routerLink="/tentang-kampus" class="block px-6 py-1 hover:bg-gray-100" (click)="closeProfil()">
                      Tentang Kampus
                    </a>
                  </li>
                  <li>
                    <a routerLink="/visi-misi" class="block px-6 py-1 hover:bg-gray-100" (click)="closeProfil()">
                      Visi &amp; Misi
                    </a>
                  </li>
                  <li>
                    <a routerLink="/struktur-organisasi" class="block px-6 py-1 hover:bg-gray-100" (click)="closeProfil()">
                      Struktur Organisasi
                    </a>
                  </li>
                  <li>
                    <a routerLink="/fasilitas" class="block px-6 py-1 hover:bg-gray-100" (click)="closeProfil()">
                      Fasilitas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- END PROFIL DROPDOWN -->

            <a routerLink="/akademik" class="text-gray-700 hover:text-blue-600 font-medium" (click)="closeProfil()">
              AKADEMIK
            </a>
            <a routerLink="/kemahasiswaan" class="text-gray-700 hover:text-blue-600 font-medium" (click)="closeProfil()">
              KEMAHASISWAAN
            </a>
            <a routerLink="/pmb" class="text-gray-700 hover:text-blue-600 font-medium" (click)="closeProfil()">
              PMB
            </a>
            <a routerLink="/career" class="text-gray-700 hover:text-blue-600 font-medium" (click)="closeProfil()">
              CAREER
            </a>
            <a routerLink="/contact" class="text-gray-700 hover:text-blue-600 font-medium" (click)="closeProfil()">
              CONTACT
            </a>
          </nav>

          <!-- Mobile menu button -->
          <button class="md:hidden" (click)="toggleMobileMenu()">
            ☰
          </button>
        </div>

        <!-- Mobile menu -->
        <div class="md:hidden" [class.hidden]="!mobileMenuOpen">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <a routerLink="/" class="block px-3 py-2 text-gray-700 hover:text-blue-600" (click)="closeMobileMenu()">
              BERANDA
            </a>

            <!-- PROFIL + submenu (mobile) -->
            <div class="px-1">
              <button
                type="button"
                class="w-full flex items-center justify-between px-2 py-2 text-gray-700 hover:text-blue-600"
                (click)="mobileProfilOpen = !mobileProfilOpen"
              >
                <span>PROFIL</span>
                <span class="text-xs">{{ mobileProfilOpen ? '▲' : '▼' }}</span>
              </button>
              <div *ngIf="mobileProfilOpen" class="pl-4 pb-2 space-y-1 text-sm text-gray-700">
                <a routerLink="/profil" (click)="closeMobileMenu()" class="block py-1">Profil</a>
                <a routerLink="/tentang-kampus" (click)="closeMobileMenu()" class="block py-1">Tentang Kampus</a>
                <a routerLink="/visi-misi" (click)="closeMobileMenu()" class="block py-1">Visi &amp; Misi</a>
                <a routerLink="/struktur-organisasi" (click)="closeMobileMenu()" class="block py-1">Struktur Organisasi</a>
                <a routerLink="/fasilitas" (click)="closeMobileMenu()" class="block py-1">Fasilitas</a>
              </div>
            </div>

            <a routerLink="/akademik" class="block px-3 py-2 text-gray-700 hover:text-blue-600" (click)="closeMobileMenu()">
              AKADEMIK
            </a>
            <a routerLink="/kemahasiswaan" class="block px-3 py-2 text-gray-700 hover:text-blue-600" (click)="closeMobileMenu()">
              KEMAHASISWAAN
            </a>
            <a routerLink="/pmb" class="block px-3 py-2 text-gray-700 hover:text-blue-600" (click)="closeMobileMenu()">
              PMB
            </a>
            <a routerLink="/career" class="block px-3 py-2 text-gray-700 hover:text-blue-600" (click)="closeMobileMenu()">
              CAREER
            </a>
            <a routerLink="/contact" class="block px-3 py-2 text-gray-700 hover:text-blue-600" (click)="closeMobileMenu()">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  mobileMenuOpen = false;
  mobileProfilOpen = false;
  profilOpen = false; // dropdown PROFIL desktop

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.mobileProfilOpen = false;
    this.profilOpen = false;
  }

  toggleProfil(): void {
    this.profilOpen = !this.profilOpen;
  }

  closeProfil(): void {
    this.profilOpen = false;
  }
}
