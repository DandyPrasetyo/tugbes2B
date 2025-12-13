 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Perusahaan } from '../models/perusahaan.model';

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

@Injectable({
  providedIn: 'root',
})
export class PerusahaanService {
  private baseUrl = 'http://localhost:8080/api/perusahaan';

  constructor(private http: HttpClient) {}

  // AMBIL SEMUA PERUSAHAAN
  getAll(): Observable<Perusahaan[]> {
    return this.http
      .get<ApiResponse<Perusahaan[]>>(this.baseUrl)
      .pipe(map((res) => res.data));
  }

  // AMBIL SATU PERUSAHAAN
  getById(id: number): Observable<Perusahaan> {
    return this.http
      .get<ApiResponse<Perusahaan>>(`${this.baseUrl}/${id}`)
      .pipe(map((res) => res.data));
  }

  // TAMBAH PERUSAHAAN
  create(data: Perusahaan): Observable<ApiResponse<Perusahaan>> {
    return this.http.post<ApiResponse<Perusahaan>>(this.baseUrl, data);
  }

  // UPDATE PERUSAHAAN
  update(id: number, data: Perusahaan): Observable<ApiResponse<Perusahaan>> {
    return this.http.put<ApiResponse<Perusahaan>>(
      `${this.baseUrl}/${id}`,
      data
    );
  }

  // HAPUS PERUSAHAAN
  delete(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.baseUrl}/${id}`);
  }

  // UPLOAD LOGO PERUSAHAAN
  uploadLogo(id: number, formData: FormData): Observable<ApiResponse<Perusahaan>> {
    return this.http.post<ApiResponse<Perusahaan>>(
      `${this.baseUrl}/${id}/upload-logo`,
      formData
    );
  }
}
