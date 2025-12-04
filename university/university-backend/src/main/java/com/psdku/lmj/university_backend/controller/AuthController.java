package com.psdku.lmj.university_backend.controller;

import com.psdku.lmj.university_backend.dto.LoginRequest;
import com.psdku.lmj.university_backend.model.Admin;
import com.psdku.lmj.university_backend.service.AdminService;

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
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        Optional<Admin> adminOpt = adminService.findByEmail(request.getEmail());

        // Cek email
        if (adminOpt.isEmpty()) {
            return ResponseEntity.status(401)
                    .body(Map.of("message", "Email tidak ditemukan"));
        }

        Admin admin = adminOpt.get();

        // Cek password
        if (!admin.getPasswordAdmin().equals(request.getPassword())) {
            return ResponseEntity.status(401)
                    .body(Map.of("message", "Password salah"));
        }

        // Login berhasil → kirim token + data
        return ResponseEntity.ok(Map.of(
                "token", UUID.randomUUID().toString(),
                "adminId", admin.getAdminId(),
                "nama", admin.getNamaAdmin()
        ));
    }
}
