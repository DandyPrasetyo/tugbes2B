import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perusahaan } from '../models/perusahaan.model';

@Injectable({
  providedIn: 'root',
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

  create(data: Perusahaan): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: number, data: Perusahaan): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
