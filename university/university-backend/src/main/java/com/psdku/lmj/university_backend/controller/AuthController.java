package com.psdku.lmj.university_backend.controller;

import com.psdku.lmj.university_backend.dto.ApiResponse;
import com.psdku.lmj.university_backend.dto.LoginRequest;
import com.psdku.lmj.university_backend.model.Admin;
import com.psdku.lmj.university_backend.service.AdminService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    private AdminService adminService;

    /* ============================
            LOGIN ADMIN
       ============================ */
    @PostMapping("/login")
    public ResponseEntity<ApiResponse> login(@Valid @RequestBody LoginRequest request) {

        // Cari admin berdasarkan email
        Optional<Admin> adminOpt = adminService.findByEmail(request.getEmail());

        // Cek email terdaftar
        if (adminOpt.isEmpty()) {
            return ResponseEntity.status(401)
                    .body(new ApiResponse(false, "Email tidak ditemukan", null));
        }

        Admin admin = adminOpt.get();

        // Cek password
        if (!admin.getPasswordAdmin().equals(request.getPassword())) {
            return ResponseEntity.status(401)
                    .body(new ApiResponse(false, "Password salah", null));
        }

        // Login berhasil → kirim token + data admin
        Map<String, Object> data = Map.of(
                "token", UUID.randomUUID().toString(),
                "adminId", admin.getAdminId(),
                "nama", admin.getNamaAdmin()
        );

        return ResponseEntity.ok(
                new ApiResponse(true, "Login berhasil", data)
        );
    }
}
