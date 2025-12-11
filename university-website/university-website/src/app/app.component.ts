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

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects.toLowerCase();

        // halaman yang hide semuanya
        this.hideAllHeaderFooter = url.includes('/login');

        // semua halaman career
        this.isCareerPage = url.includes('/career');
      });
  }
}
