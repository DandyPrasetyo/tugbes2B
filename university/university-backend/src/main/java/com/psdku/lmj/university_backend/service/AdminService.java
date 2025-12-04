package com.psdku.lmj.university_backend.service;

import com.psdku.lmj.university_backend.model.Admin;
import com.psdku.lmj.university_backend.repository.AdminRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepo;

    public List<Admin> getAllAdmins() {
        return adminRepo.findAll();
    }

    public Optional<Admin> getAdminById(Long id) {
        return adminRepo.findById(id);
    }

    public Optional<Admin> findByEmail(String email) {
        return adminRepo.findByEmailAdmin(email);
    }

    public boolean updatePassword(Long id, String newPassword) {
        Optional<Admin> adminOpt = adminRepo.findById(id);

        if (adminOpt.isEmpty()) return false;

        Admin admin = adminOpt.get();
        admin.setPasswordAdmin(newPassword);
        adminRepo.save(admin);

        return true;
    }
}
