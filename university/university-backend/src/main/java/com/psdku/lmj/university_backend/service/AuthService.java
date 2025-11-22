// ...existing code...
package com.psdku.lmj.university_backend.service;

import com.psdku.lmj.university_backend.dto.LoginRequest;
import com.psdku.lmj.university_backend.dto.LoginResponse;
import com.psdku.lmj.university_backend.model.Admin;
import com.psdku.lmj.university_backend.repository.AdminRepository;
import java.util.Optional;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Service class for Admin authentication
 * Author: Amanda / PSDku Lumajang Project
 */
@Service
public class AuthService {
    
    @Autowired
    private AdminRepository adminRepository;
    
    public LoginResponse login(LoginRequest loginRequest) {
        // Ambil Optional langsung dari repository (repository should return Optional<Admin>)
        Optional<Admin> adminOptional = adminRepository.findByEmailAdmin(loginRequest.getEmail());
        
        if (adminOptional.isPresent()) {
            Admin admin = adminOptional.get();
            // Null-safe comparison
            if (Objects.equals(admin.getPasswordAdmin(), loginRequest.getPassword())) {
                return new LoginResponse(true, "Login berhasil", admin);
            }
        }
        
        return new LoginResponse(false, "Email atau password salah", null);
    }
}
// ...existing code...