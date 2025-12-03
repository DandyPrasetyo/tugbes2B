import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lowongan } from '../models/lowongan.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LowonganService {
  private apiUrl = 'http://localhost:8080/api'; // ganti sesuai backend kamu

  constructor(private http: HttpClient) {}

  // ===============================
  // GET Semua Lowongan
  // ===============================
  getAll(): Observable<Lowongan[]> {
    return this.http.get<Lowongan[]>(`${this.apiUrl}/lowongan`);
  }

  // ===============================
  // GET Lowongan by ID
  // ===============================
  getById(id: number): Observable<Lowongan> {
    return this.http.get<Lowongan>(`${this.apiUrl}/lowongan/${id}`);
  }

  // ===============================
  // CREATE Lowongan
  // ===============================
  create(data: Lowongan): Observable<any> {
    return this.http.post(`${this.apiUrl}/lowongan`, data);
  }

  // ===============================
  // UPDATE Lowongan
  // ===============================
  update(id: number, data: Lowongan): Observable<any> {
    return this.http.put(`${this.apiUrl}/lowongan/${id}`, data);
  }

  // ===============================
  // DELETE Lowongan
  // ===============================
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/lowongan/${id}`);
  }
}
