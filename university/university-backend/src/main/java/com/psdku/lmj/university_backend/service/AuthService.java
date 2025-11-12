/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.psdku.lmj.university_backend.service;

import com.psdku.lmj.university_backend.dto.LoginRequest;
import com.psdku.lmj.university_backend.dto.LoginResponse;
import com.psdku.lmj.university_backend.model.Student;
import com.psdku.lmj.university_backend.repository.StudentRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author LENOVO
 */
@Service
public class AuthService {
    
    @Autowired
    private StudentRepository studentRepository;
    
    public LoginResponse login(LoginRequest loginRequest) {
        Optional<Student> studentOptional = studentRepository.findByStudentIdAndPassword(
            loginRequest.getStudentId(), 
            loginRequest.getPassword()
        );
        
        if (studentOptional.isPresent()) {
            return new LoginResponse(true, "Login successful", studentOptional.get());
        }
        
        return new LoginResponse(false, "Invalid credentials", null);
    }
}
