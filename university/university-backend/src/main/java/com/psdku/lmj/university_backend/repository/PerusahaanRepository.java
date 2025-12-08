package com.psdku.lmj.university_backend.repository;

import com.psdku.lmj.university_backend.model.Perusahaan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface PerusahaanRepository extends JpaRepository<Perusahaan, Long> {

    // Kode awal
    List<Perusahaan> findByNamaPerusahaanContainingIgnoreCase(String namaPerusahaan);
    Optional<Perusahaan> findByEmail(String email);

    // 1. VALIDASI UNIQUENESS + FORMAT @
    boolean existsByEmail(String email);
    boolean existsByEmailAndPerusahaanIdNot(String email, Long perusahaanId);

    @Query("SELECT CASE WHEN COUNT(p) > 0 THEN true ELSE false END FROM Perusahaan p " +
           "WHERE p.email LIKE '%@%.%' AND p.email NOT LIKE '%@%@%' " +
           "AND (:perusahaanId IS NULL OR p.perusahaanId != :perusahaanId)")
    boolean existsByValidEmailFormat(@Param("perusahaanId") Long perusahaanId);

    // PHONE (pakai field noTelp)
    boolean existsByNoTelp(Long noTelp);
    Optional<Perusahaan> findByPerusahaanIdAndNoTelp(Long perusahaanId, Long noTelp);
    Optional<Perusahaan> findByNoTelp(Long noTelp);

    // 2. FIND BY COMBINATION
    Optional<Perusahaan> findByPerusahaanIdAndEmail(Long perusahaanId, String email);
    // (hapus method phoneNumber lama karena sudah pakai noTelp)

    // 3. ACTIVE COMPANIES ONLY (SOFT DELETE)
    List<Perusahaan> findByActiveTrueOrderByNamaPerusahaanAsc();
    List<Perusahaan> findByActiveTrueAndNamaPerusahaanContainingIgnoreCaseOrderByNamaPerusahaanAsc(String nama);

    // 4. DASHBOARD STATS
    @Query("SELECT COUNT(p) FROM Perusahaan p WHERE p.active = true")
    long countActiveCompanies();

    @Query("SELECT COUNT(p) FROM Perusahaan p WHERE p.logo IS NOT NULL AND p.active = true")
    long countCompaniesWithLogo();

    // 5. FEATURED COMPANIES
    @Query("SELECT p FROM Perusahaan p WHERE p.active = true AND p.logo IS NOT NULL ORDER BY p.createdAt DESC")
    Page<Perusahaan> findFeaturedCompanies(Pageable pageable);

    // 6. SEARCH + FILTER ADVANCED
    @Query("SELECT p FROM Perusahaan p WHERE p.active = true " +
           "AND (LOWER(p.namaPerusahaan) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
           "OR LOWER(p.alamat) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
           "OR LOWER(p.deskripsi) LIKE LOWER(CONCAT('%', :keyword, '%')))")
    List<Perusahaan> searchCompanies(@Param("keyword") String keyword);

    // 7. PAGINATION SUPPORT
    Page<Perusahaan> findByActiveTrueOrderByNamaPerusahaanAsc(Pageable pageable);
    Page<Perusahaan> findByActiveTrueAndNamaPerusahaanContainingIgnoreCaseOrderByNamaPerusahaanAsc(
            String namaPerusahaan, Pageable pageable);

    // 8. ADMIN QUERIES
    @Query("SELECT COUNT(p) FROM Perusahaan p WHERE p.active = false")
    long countDeletedCompanies();

    // ==== TAMBAHAN: WEBSITE & LOGO ====

    boolean existsByWebsite(String website);
    Optional<Perusahaan> findByWebsite(String website);

    List<Perusahaan> findByLogoIsNotNull();          // semua perusahaan yang punya logo
    List<Perusahaan> findByLogoIsNull();             // perusahaan tanpa logo (kalau perlu)

    // ==== TAMBAHAN: CREATED_AT & UPDATED_AT ====

    List<Perusahaan> findByCreatedAtBetween(LocalDateTime startDate,
                                            LocalDateTime endDate);

    List<Perusahaan> findByUpdatedAtBetween(LocalDateTime startDate,
                                            LocalDateTime endDate);
}
