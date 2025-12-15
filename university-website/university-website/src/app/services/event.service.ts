import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EventItem {
  id: number;
  judul: string;
  kategori: string;
  tanggal: string;
  lokasi: string;
  banner: string;
  deskripsi: string;
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private readonly apiUrl = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient) {}

  // ambil semua event
  getAll(): Observable<EventItem[]> {
    return this.http.get<EventItem[]>(this.apiUrl);
  }

  // ambil 1 event berdasarkan id (untuk detail)
  getById(id: number): Observable<EventItem> {
    return this.http.get<EventItem>(`${this.apiUrl}/${id}`);
  }
}
