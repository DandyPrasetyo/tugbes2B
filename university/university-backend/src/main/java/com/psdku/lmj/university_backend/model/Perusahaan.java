/*
 * Entity class for table perusahaan
 * Author: Amanda / PSDku Lumajang Project
 */
package com.psdku.lmj.university_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "perusahaan")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Perusahaan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "perusahaan_id")
    private Long perusahaanId;

    @Column(name = "nama_perusahaan", nullable = false, length = 150)
    private String namaPerusahaan;

    @Column(name = "alamat", nullable = false, columnDefinition = "TEXT")
    private String alamat;

    @Column(nullable = false, unique = true, length = 100)
    private String email;

    @Column(name = "no_telp", length = 20)
    private String noTelp;

    @Column(columnDefinition = "TEXT")
    private String deskripsi;

    @Column(length = 100)
    private String website;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}