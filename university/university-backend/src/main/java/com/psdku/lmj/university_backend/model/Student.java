/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.psdku.lmj.university_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 *
 * @author LENOVO
 */
@Entity
@Table(name = "students")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true, nullable = false)
    private String studentId;
    
    @Column(nullable = false)
    private String name;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    @Column(nullable = false)
    private String password;
    
    private String major;
    private String year;
    private Double gpa;
    private Integer credits;
    private Integer totalCredits;
    private Integer attendance;
    
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Course> currentCourses;
    
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Assignment> upcomingAssignments;
    
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Announcement> announcements;
}
