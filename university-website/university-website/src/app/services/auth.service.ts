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

  // ================= TAMBAHAN (TIDAK MENGUBAH YANG LAMA) =================
  // BASE URL AUTH (LOGIN VIA AUTH CONTROLLER)
  private authUrl = 'http://localhost:8080/api/auth';
  // =====================================================================

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  /* LOGIN ADMIN (ADMIN CONTROLLER — TETAP ADA, TIDAK DIUBAH) */
  login(payload: { email: string; password: string }): Observable<ApiResponse<LoginData>> {
    // POST http://localhost:8080/api/admin/login
    return this.http.post<ApiResponse<LoginData>>(
      `${this.adminUrl}/login`,
      payload
    );
  }

  // ================= TAMBAHAN AMAN =================
  // LOGIN ADMIN VIA AUTH CONTROLLER (POST)
  loginAuth(payload: { email: string; password: string }): Observable<ApiResponse<LoginData>> {
    // POST http://localhost:8080/api/auth/login
    return this.http.post<ApiResponse<LoginData>>(
      `${this.authUrl}/login`,
      payload
    );
  }

  // 🔹 GET LOGIN (KHUSUS TESTING POSTMAN, TIDAK DIPAKAI ANGULAR)
  // contoh:
  // GET /api/auth/login?email=xxx&password=yyy
  loginAuthGet(email: string, password: string): Observable<ApiResponse<LoginData>> {
    return this.http.get<ApiResponse<LoginData>>(
      `${this.authUrl}/login`,
      {
        params: { email, password }
      }
    );
  }
  // =================================================

  /* LOGOUT ADMIN */
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('adminId');
    localStorage.removeItem('nama');

    this.router.navigate(['/career/login-admin']);
  }

  /* ================== CRUD ADMIN ================== */

  getAll(): Observable<Admin[]> {
    return this.http
      .get<ApiResponse<Admin[]>>(this.adminUrl)
      .pipe(map((res) => res.data));
  }

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
