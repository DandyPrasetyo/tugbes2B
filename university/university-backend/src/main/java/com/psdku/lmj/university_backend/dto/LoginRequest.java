/*
 * DTO class for login request
 * Author: Amanda / PSDku Lumajang Project
 */
package com.psdku.lmj.university_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Digunakan untuk menerima data login dari client (frontend).
 * Berisi email dan password admin.
 * 
 * @author kelompok2
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequest {
    
    private String email;
    private String password;
}