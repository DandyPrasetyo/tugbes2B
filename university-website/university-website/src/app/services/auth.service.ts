import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model';

export interface AdminLoginResponse {
  token: string;
  adminId?: number;
  nama?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/admin'; // sesuaikan backend kamu

  constructor(private http: HttpClient) {}

  // ➤ Login admin
  login(payload: {
    email: string;
    password: string;
  }): Observable<AdminLoginResponse> {
    return this.http.post<AdminLoginResponse>(`${this.apiUrl}/login`, payload);
  }

  // ➤ Ambil semua admin
  getAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl);
  }

  // ➤ Ambil admin berdasarkan ID
  getById(id: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.apiUrl}/${id}`);
  }

  // ➤ Tambah admin
  create(data: Admin): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // ➤ Update admin
  update(id: number, data: Admin): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // ➤ Hapus admin
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
