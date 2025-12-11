import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lowongan } from '../models/lowongan.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LowonganService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  // ===============================
  // GET Semua Lowongan
  // ===============================
  getAll(): Observable<Lowongan[]> {
    return this.http
      .get<any>(`${this.apiUrl}/lowongan`)
      .pipe(map((res) => res.data as Lowongan[]));
  }

  // ===============================
  // GET Lowongan by ID
  // ===============================
  getById(id: number): Observable<Lowongan> {
    return this.http
      .get<any>(`${this.apiUrl}/lowongan/${id}`)
      .pipe(map((res) => res.data as Lowongan));
  }

  // ===============================
  // Helper FormData (JSON + File)
  // ===============================
  private buildFormData(lowongan: any, file?: File): FormData {
    const formData = new FormData();

    formData.append(
      'lowongan',
      new Blob([JSON.stringify(lowongan)], { type: 'application/json' })
    );

    if (file) {
  formData.append('flayer', file); // tadinya 'poster'
}



    return formData;
  }

  // ===============================
  // CREATE Lowongan (POST Multipart)
  // ===============================
  create(lowongan: any, file?: File): Observable<any> {
    const formData = this.buildFormData(lowongan, file);
    return this.http.post(`${this.apiUrl}/lowongan`, formData);
  }

  // ===============================
  // UPDATE tanpa ganti poster (JSON)
  // ===============================
  update(id: number, lowongan: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/lowongan/${id}`, lowongan);
  }

  // ===============================
  // UPDATE dengan ganti poster (Multipart)
  //   → sesuaikan dengan controller:
  //     @PutMapping(path = "/{id}", consumes = MULTIPART_FORM_DATA)
  // ===============================
  updateWithPoster(id: number, lowongan: any, file: File): Observable<any> {
    const formData = this.buildFormData(lowongan, file);
    // pakai endpoint yang sama (/lowongan/{id}), hanya beda Content-Type
    return this.http.put(`${this.apiUrl}/lowongan/${id}`, formData);
  }

  // ===============================
  // DELETE Lowongan
  // ===============================
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/lowongan/${id}`);
  }
}
