import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showHeaderFooter: boolean = true;

  constructor(private router: Router) {
    // cek route, hide header/footer jika halaman tertentu
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // contoh: sembunyikan header/footer di halaman login
        this.showHeaderFooter = !event.url.includes('/login');
      });
  }

  // alternatif jika mau pakai di template
  isCareerPage(): boolean {
    return !this.showHeaderFooter;
  }
}
