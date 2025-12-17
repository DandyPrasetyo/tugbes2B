import { Injectable } from '@angular/core';
import { LowonganService } from './lowongan.service';
import { Observable } from 'rxjs';
import { Lowongan } from '../models/lowongan.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MagangService {
  constructor(private lowonganService: LowonganService) {}

  // ===============================
  // GET Magang terbaru (beranda)
  // ===============================
  getLatest(limit: number): Observable<Lowongan[]> {
    // ambil semua lowongan, filter Magang, urutkan terbaru, lalu ambil "limit"
    return this.lowonganService.getAll().pipe(
      map((list: Lowongan[]) =>
        [...list]
          .filter((job: any) => job.tipePekerjaan === 'Magang')
          .sort((a: any, b: any) => {
            const da = new Date(a.createdAt ?? 0).getTime();
            const db = new Date(b.createdAt ?? 0).getTime();
            return db - da; // terbaru dulu
          })
          .slice(0, limit)
      )
    );
  }

  getAllMagang(): Observable<Lowongan[]> {
    return this.lowonganService.getAll().pipe(
      map((list: Lowongan[]) =>
        list.filter((job) => job.tipePekerjaan === 'Magang')
      )
    );
  }

  getMagangById(id: number): Observable<Lowongan | undefined> {
    return this.getAllMagang().pipe(
      map((list) =>
        list.find((job: any) => {
          const jobId = job.id ?? job.lowonganId ?? job.lowongan_id;
          return Number(jobId) === id;
        })
      )
    );
  }
}
