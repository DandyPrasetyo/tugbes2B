// ...existing code...
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perusahaan } from '../models/perusahaan.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerusahaanService {
  private baseUrl = 'http://localhost:8080/api/perusahaan';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Perusahaan[]> {
    return this.http.get<Perusahaan[]>(this.baseUrl);
  }

  getById(id: number): Observable<Perusahaan> {
    return this.http.get<Perusahaan>(`${this.baseUrl}/${id}`);
  }

  create(perusahaan: Perusahaan): Observable<Perusahaan> {
    return this.http.post<Perusahaan>(this.baseUrl, perusahaan);
  }

  update(id: number, perusahaan: Perusahaan): Observable<Perusahaan> {
    return this.http.put<Perusahaan>(`${this.baseUrl}/${id}`, perusahaan);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
// ...existing code...