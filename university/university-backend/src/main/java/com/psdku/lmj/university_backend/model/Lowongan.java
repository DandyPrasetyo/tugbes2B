/*
 * Entity class for table lowongan
 * Author: Amanda / PSDku Lumajang Project
 */
package com.psdku.lmj.university_backend.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "lowongan")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Lowongan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lowongan_id")
    private Long lowonganId;

    @ManyToOne
    @JoinColumn(name = "admin_id", nullable = false)
    private Admin admin;

    @ManyToOne
    @JoinColumn(name = "perusahaan_id", nullable = false)
    private Perusahaan perusahaan;

    @Column(name = "judul_lowongan", nullable = false, length = 100)
    private String judulLowongan;

    @Column(nullable = false, length = 100)
    private String posisi;

    // === FIELD BARU: lokasi lowongan (kota/alamat singkat) ===
    @Column(name = "lokasi", length = 150)
    private String lokasi;

    @Column(columnDefinition = "TEXT")
    private String deskripsi;

    @Column(length = 255)
    private String flayer;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipe_pekerjaan", nullable = false)
    private TipePekerjaan tipePekerjaan;

    private Long gaji;

    @Column(name = "batas_tanggal", nullable = false)
    private LocalDate batasTanggal;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusLowongan status = StatusLowongan.Aktif;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // TAMBAHAN: set waktu otomatis saat insert/update
    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = this.createdAt;
    }

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

    public enum TipePekerjaan {
        Full_time, Part_time, Magang
    }

    public enum StatusLowongan {
        Aktif, Tutup
    }
}
