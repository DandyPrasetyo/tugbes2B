import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header-career',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-career.component.html',
  styleUrls: ['./header-career.component.css'],
})
export class HeaderCareerComponent {
  showSearch = false;
  showLanguageMenu = false;

  // ======= HEADER SHOW/HIDE =======
  showHeader = true; // header selalu tampil

  // indikator halaman career home vs halaman lain (event/magang/loker/mitra)
  isHome = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        const url = e.urlAfterRedirects || e.url;
        this.isHome = url === '/career' || url.startsWith('/career/home');
      });
  }

  // Logika sembunyi/muncul dimatikan
  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(e: MouseEvent) {
  //   const y = e.clientY;
  //
  //   if (y <= 180) {
  //     this.showHeader = true;
  //   } else if (y > 260) {
  //     this.showHeader = false;
  //   }
  // }

  // ======= EXISTING CODE (tetap) =======
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
    console.log('Selected language:', lang);
    this.showLanguageMenu = false;
  }
}
