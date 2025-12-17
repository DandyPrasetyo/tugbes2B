import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceTsService {

  private adminUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  // GET semua admin
  getAll(): Observable<Admin[]> {
    return this.http
      .get<any>(this.adminUrl)
      .pipe(map(res => res.data));
  }

  // GET admin by ID
  getById(id: number): Observable<Admin> {
    return this.http
      .get<any>(`${this.adminUrl}/${id}`)
      .pipe(map(res => res.data));
  }

  // TAMBAH admin
  create(data: Admin): Observable<any> {
    return this.http.post(this.adminUrl, data);
  }

  // UPDATE admin
  update(id: number, data: Admin): Observable<any> {
    return this.http.put(`${this.adminUrl}/${id}`, data);
  }

  // HAPUS admin
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.adminUrl}/${id}`);
  }

  // UPDATE password admin
  updatePassword(id: number, newPassword: string): Observable<any> {
    return this.http.put(`${this.adminUrl}/password/${id}`, {
      password: newPassword
    });
  }
}
