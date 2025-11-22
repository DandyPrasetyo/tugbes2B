// ...existing code...
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lowongan } from '../models/lowongan.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LowonganService {
  private baseUrl = 'http://localhost:8080/api/lowongan';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Lowongan[]> {
    return this.http.get<Lowongan[]>(this.baseUrl);
  }

  getById(id: number): Observable<Lowongan> {
    return this.http.get<Lowongan>(`${this.baseUrl}/${id}`);
  }

  create(lowongan: Lowongan): Observable<Lowongan> {
    return this.http.post<Lowongan>(this.baseUrl, lowongan);
  }

  update(id: number, lowongan: Lowongan): Observable<Lowongan> {
    return this.http.put<Lowongan>(`${this.baseUrl}/${id}`, lowongan);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  filterByType(tipe: string): Observable<Lowongan[]> {
    return this.http.get<Lowongan[]>(`${this.baseUrl}?tipe_pekerjaan=${tipe}`);
  }
}
// ...existing code...