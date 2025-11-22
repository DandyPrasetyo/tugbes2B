/*
 * Entity class for table admin
 * Author: Amanda / PSDku Lumajang Project
 */
package com.psdku.lmj.university_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "admin")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "admin_id")
    private Long adminId;

    @Column(name = "nama_admin", nullable = false, length = 30)
    private String namaAdmin;

    @Column(name = "email_admin", nullable = false, unique = true, length = 50)
    private String emailAdmin;

    @Column(name = "password_admin", nullable = false, length = 100)
    private String passwordAdmin;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}