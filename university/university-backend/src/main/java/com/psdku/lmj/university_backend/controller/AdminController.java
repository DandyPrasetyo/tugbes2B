package com.psdku.lmj.university_backend.controller;

import com.psdku.lmj.university_backend.dto.ApiResponse;
import com.psdku.lmj.university_backend.dto.LoginRequest;
import com.psdku.lmj.university_backend.model.Admin;
import com.psdku.lmj.university_backend.service.AdminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {
    
    @Autowired
    private AdminService adminService;
/* =============================
          LOGIN ADMIN
   ============================== */
@PostMapping("/login")
public ResponseEntity<ApiResponse> login(@RequestBody LoginRequest request) {

    Optional<Admin> adminOpt = adminService.findByEmail(request.getEmail());

    if (adminOpt.isEmpty()) {
        return ResponseEntity.status(401)
                .body(new ApiResponse(false, "Email tidak ditemukan", null));
    }

    Admin admin = adminOpt.get();

    if (!admin.getPasswordAdmin().equals(request.getPassword())) {
        return ResponseEntity.status(401)
                .body(new ApiResponse(false, "Password salah", null));
    }

    Map<String, Object> loginData = new HashMap<>();
    loginData.put("token", UUID.randomUUID().toString());
    loginData.put("adminId", admin.getAdminId());
    loginData.put("nama", admin.getNamaAdmin());

    return ResponseEntity.ok(
            new ApiResponse(true, "Login berhasil", loginData)
    );
}

    /* =============================
             GET SEMUA ADMIN
    ============================== */
    @GetMapping
    public ResponseEntity<ApiResponse> getAllAdmins() {
        List<Admin> admins = adminService.getAllAdmins();
        return ResponseEntity.ok(
            new ApiResponse(true, "Data admin berhasil diambil", admins)
        );
    }

    /* =============================
                GET BY ID
    ============================== */
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getAdminById(@PathVariable Long id) {
        Optional<Admin> admin = adminService.getAdminById(id);
        return ResponseEntity.ok(
            new ApiResponse(true, "Data admin ditemukan", admin)
        );
    }

    /* =============================
           UPDATE PASSWORD ADMIN
    ============================== */
    @PutMapping("/password/{id}")
    public ResponseEntity<?> updatePassword(
            @PathVariable Long id,
            @RequestBody Map<String, String> request
    ) {
        String newPassword = request.get("password");
        boolean updated = adminService.updatePassword(id, newPassword);

        if (!updated) {
            return ResponseEntity.status(404)
                .body(Map.of("message", "Admin tidak ditemukan"));
        }

        return ResponseEntity.ok(
            Map.of("message", "Password berhasil diperbarui")
        );
    }
}
