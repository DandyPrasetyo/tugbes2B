// ...existing code...
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Admin {
  id?: number;
  emailAdmin?: string;
  passwordAdmin?: string;
  // tambahkan field lain sesuai model backend
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiBaseUrl = 'http://localhost:8080/api';
  private baseUrl = `${this.apiBaseUrl}/admin`;
  private authUrl = `${this.apiBaseUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, { email, password });
  }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.baseUrl);
  }

  createAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.baseUrl, admin);
  }

  updateAdmin(admin_id: number, admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${this.baseUrl}/${admin_id}`, admin);
  }

  deleteAdmin(admin_id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${admin_id}`);
  }
}
// ...existing code...
