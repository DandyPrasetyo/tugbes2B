import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model';

export interface AdminLoginResponse {
  success: boolean;
  message: string;
  admin: {
    adminId: number;
    namaAdmin: string;
    emailAdmin: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // URL LOGIN (SAMA DENGAN YANG BERHASIL DI POSTMAN)
  private authUrl = 'http://localhost:8080/api/auth';

  // URL CRUD ADMIN
  private adminUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  /* LOGIN ADMIN */
  login(payload: { email: string; password: string }): Observable<AdminLoginResponse> {
    return this.http.post<AdminLoginResponse>(`${this.authUrl}/login`, payload);
  }

  /* CRUD ADMIN */
  getAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.adminUrl}`);
  }

  getById(id: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.adminUrl}/${id}`);
  }

  create(data: Admin): Observable<any> {
    return this.http.post(`${this.adminUrl}`, data);
  }

  update(id: number, data: Admin): Observable<any> {
    return this.http.put(`${this.adminUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.adminUrl}/${id}`);
  }

  updatePassword(id: number, newPassword: string): Observable<any> {
    return this.http.put(`${this.adminUrl}/password/${id}`, {
      password: newPassword,
    });
  }
}
