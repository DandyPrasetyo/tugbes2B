import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* ====== TIPE RESPONS LOGIN ====== */
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
  providedIn: 'root'
})
export class LoginServiceTsService {

  // endpoint AUTH sesuai AuthController Spring Boot
  private authUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  /* LOGIN ADMIN */
  login(payload: { email: string; password: string }): Observable<ApiResponse<LoginData>> {
    return this.http.post<ApiResponse<LoginData>>(
      `${this.authUrl}/login`,
      payload
    );
  }
}
