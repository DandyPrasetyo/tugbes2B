import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; // <--- TAMBAHAN

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css',
})
export class EventDetailComponent implements OnInit {
  event: any;
  loading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location // <--- TAMBAHAN
  ) {}

  ngOnInit(): void {
    // 1) Data utama dikirim dari EventComponent lewat state
    const navState = history.state?.data;
    if (navState) {
      this.event = navState;
      this.loading = false;
      return;
    }

    // 2) Fallback: kalau nanti kamu pakai /career/event/:id dan punya EventService
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.errorMessage = 'Event tidak ditemukan.';
      this.loading = false;
      return;
    }

    // Di sini nanti bisa ditambah:
    // this.eventService.getById(+id).subscribe(...)
    this.errorMessage = 'Event tidak ditemukan.';
    this.loading = false;
  }

  get judulTampil(): string {
    return this.event?.judul || 'Detail Event';
  }

  // 🔙 Tombol kembali ke halaman sebelumnya
  goBack(): void {
    this.location.back();
  }
}
