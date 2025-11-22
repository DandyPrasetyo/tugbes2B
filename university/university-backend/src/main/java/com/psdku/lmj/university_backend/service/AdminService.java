/*
 * Service class for handling Admin data
 * Author: Amanda / PSDku Lumajang Project
 */
package com.psdku.lmj.university_backend.service;

import com.psdku.lmj.university_backend.model.Admin;
import com.psdku.lmj.university_backend.repository.AdminRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author kelompok2
 */
@Service
public class AdminService {
    
    @Autowired
    private AdminRepository adminRepository;
    
    /**
     * Get all admins
     */
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }
    
    /**
     * Get admin by ID
     */
    public Optional<Admin> getAdminById(Long id) {
        return adminRepository.findById(id);
    }
    
    /**
     * Create new admin
     */
    public Admin createAdmin(Admin admin) {
        return adminRepository.save(admin);
    }
    
    /**
     * Update existing admin
     */
    public Admin updateAdmin(Long id, Admin updatedAdmin) {
        Admin admin = adminRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Admin not found"));
        
        admin.setNamaAdmin(updatedAdmin.getNamaAdmin());
        admin.setEmailAdmin(updatedAdmin.getEmailAdmin());
        admin.setPasswordAdmin(updatedAdmin.getPasswordAdmin());
        admin.setUpdatedAt(updatedAdmin.getUpdatedAt());
        
        return adminRepository.save(admin);
    }
    
    /**
     * Delete admin by ID
     */
    public void deleteAdmin(Long id) {
        adminRepository.deleteById(id);
    }
}