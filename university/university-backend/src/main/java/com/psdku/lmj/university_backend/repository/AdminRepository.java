// ...existing code...
package com.psdku.lmj.university_backend.repository;

import com.psdku.lmj.university_backend.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    // Cari admin berdasarkan email (untuk login nanti)
    Optional<Admin> findByEmailAdmin(String emailAdmin);

    // Cek apakah email sudah terdaftar
    boolean existsByEmailAdmin(String emailAdmin);
}
// ...existing code...