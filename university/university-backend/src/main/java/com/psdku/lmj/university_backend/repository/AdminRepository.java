package com.psdku.lmj.university_backend.repository;

import com.psdku.lmj.university_backend.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Optional<Admin> findByEmailAdmin(String emailAdmin);
}
