package com.psdku.lmj.university_backend.dto;

public class LoginRequest {

    private String email;
    private String password;

    public LoginRequest() {
        // konstruktor default wajib ada untuk Spring
    }

    // Getter & Setter Email
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    // Getter & Setter Password
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
