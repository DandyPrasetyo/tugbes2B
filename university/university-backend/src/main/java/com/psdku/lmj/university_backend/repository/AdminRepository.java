package com.psdku.lmj.university_backend.repository;

import com.psdku.lmj.university_backend.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

    // LOGIN by email
    Optional<Admin> findByEmailAdmin(String emailAdmin);

    // CEK duplikat email
    boolean existsByEmailAdmin(String emailAdmin);

    // FIND BY primary key khusus field adminId (kalau entity pakai nama itu)
    Optional<Admin> findByAdminId(Long adminId);

    // LIST admin urut nama
    List<Admin> findAllByOrderByNamaAdminAsc();
}
