import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Admin } from '../models/admin.model';

/* ====== TIPE RESPONS LOGIN SESUAI BACKEND ====== */
export interface LoginData {
  token: string;
  adminId: number;
  nama: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // BASE URL ADMIN (LOGIN + CRUD)
  private adminUrl = 'http://localhost:8080/api/admin';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  /* LOGIN ADMIN */
  login(payload: { email: string; password: string }): Observable<ApiResponse<LoginData>> {
    // POST http://localhost:8080/api/admin/login
    return this.http.post<ApiResponse<LoginData>>(
      `${this.adminUrl}/login`,
      payload
    );
  }

  /* LOGOUT ADMIN */
  logout(): void {
    // hapus data login yang kamu simpan
    localStorage.removeItem('token');
    localStorage.removeItem('adminId');
    localStorage.removeItem('nama');

    // redirect ke halaman login admin (lihat app.routes.ts → path: 'career/login-admin')
    this.router.navigate(['/career/login-admin']);
  }

  /* ================== CRUD ADMIN ================== */

  // GET semua admin
  getAll(): Observable<Admin[]> {
    return this.http
      .get<ApiResponse<Admin[]>>(this.adminUrl)
      .pipe(map((res) => res.data));
  }

  // GET admin by id
  getById(id: number): Observable<Admin> {
    return this.http
      .get<ApiResponse<Admin>>(`${this.adminUrl}/${id}`)
      .pipe(map((res) => res.data));
  }

  create(data: Admin): Observable<any> {
    return this.http.post(this.adminUrl, data);
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
