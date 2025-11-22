/*
 * Repository class for table perusahaan
 * Author: Amanda / PSDku Lumajang Project
 */
package com.psdku.lmj.university_backend.repository;

import com.psdku.lmj.university_backend.model.Perusahaan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 *
 * @author kelompok2
 */
@Repository
public interface PerusahaanRepository extends JpaRepository<Perusahaan, Long> {
    // Cari perusahaan berdasarkan nama (case-insensitive)
    List<Perusahaan> findByNamaPerusahaanContainingIgnoreCase(String namaPerusahaan);

    // Cari perusahaan berdasarkan email
    Perusahaan findByEmail(String email);
}