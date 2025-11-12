/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.psdku.lmj.university_backend.dto;

import lombok.Data;

/**
 *
 * @author LENOVO
 */
@Data
public class LoginRequest {
    private String studentId;
    private String password;
}
