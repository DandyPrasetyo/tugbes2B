package com.psdku.lmj.university_backend.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.psdku.lmj.university_backend.model.Lowongan;
import com.psdku.lmj.university_backend.model.Perusahaan;

@Repository
public interface LowonganRepository extends JpaRepository<Lowongan, Long> {

    // Cari lowongan berdasarkan status (Aktif / Tutup)
    List<Lowongan> findByStatus(String status);

    // Cari lowongan berdasarkan perusahaan tertentu
    List<Lowongan> findByPerusahaan(Perusahaan perusahaan);

    // Cari lowongan dengan batas waktu pendaftaran setelah tanggal tertentu
    List<Lowongan> findByBatasTanggalAfterOrderByBatasTanggalAsc(LocalDate date);

    // Search lowongan fleksibel
    @Query("SELECT l FROM Lowongan l " +
           "WHERE (:query IS NULL OR l.judulLowongan LIKE %:query% OR l.posisi LIKE %:query%) " +
           "AND (:tipePekerjaan IS NULL OR l.tipePekerjaan = :tipePekerjaan) " +
           "AND (:status IS NULL OR l.status = :status)")
    List<Lowongan> search(@Param("query") String query,
                          @Param("tipePekerjaan") String tipePekerjaan,
                          @Param("status") String status);
}
