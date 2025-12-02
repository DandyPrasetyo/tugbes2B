import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent {
  searchOpen = false;
  langOpen = false;

  toggleSearch() {
    this.searchOpen = !this.searchOpen;
  }

  toggleLang() {
    this.langOpen = !this.langOpen;
  }

  setLang(lang: string) {
    console.log('Language changed:', lang);
    this.langOpen = false;
  }
}
