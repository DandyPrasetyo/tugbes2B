package com.psdku.lmj.university_backend.service;

import com.psdku.lmj.university_backend.model.Admin;
import com.psdku.lmj.university_backend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private AdminRepository adminRepository;

    public boolean validateLogin(String email, String password) {
        Optional<Admin> adminOpt = adminRepository.findByEmailAdmin(email);
        
        if (adminOpt.isEmpty()) {
            return false;
        }
        
        Admin admin = adminOpt.get();
        return admin.getPasswordAdmin().equals(password);
    }

    public Optional<Admin> findAdminByEmail(String email) {
        return adminRepository.findByEmailAdmin(email);
    }
}
