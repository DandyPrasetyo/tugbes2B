/*
 * DTO class for login response
 * Author: Amanda / PSDku Lumajang Project
 */
package com.psdku.lmj.university_backend.dto;

import com.psdku.lmj.university_backend.model.Admin;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Digunakan untuk mengirimkan hasil login ke client.
 * Berisi status sukses/gagal, pesan, dan data admin jika berhasil login.
 * 
 * @author kelompok2
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    
    private boolean success;
    private String message;
    private Admin admin;
}