import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeaderCareerComponent } from './components/career/header-career/header-career.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterCareerComponent } from './components/career/footer-career/footer-career.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    RouterModule,
    HeaderComponent,
    HeaderCareerComponent,
    FooterComponent,
    FooterCareerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCareerPage = false;
  hideAllHeaderFooter = false;

  // === TAMBAHAN: untuk deteksi beranda career ===
  currentUrl = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects.toLowerCase();

        // SIMPAN URL ASLI (tanpa toLowerCase) kalau mau strict
        this.currentUrl = event.urlAfterRedirects;

        // SEMUA HALAMAN LOGIN -> sembunyikan header & footer
        this.hideAllHeaderFooter =
          url.includes('/login') || url.includes('/login-admin');

        // DETEKSI HALAMAN CAREER
        this.isCareerPage = url.startsWith('/career');
      });
  }
}
