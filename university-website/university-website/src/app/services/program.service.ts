/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor() { }
}
  */

// ========================================
// COMPLETE SERVICES WITH FULL DATA
// ========================================

// src/app/services/program.service.ts (COMPLETE VERSION)
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Program } from '../models/program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private programsSubject = new BehaviorSubject<Program[]>(this.getAllPrograms());
  public programs$ = this.programsSubject.asObservable();

  getPrograms(): Observable<Program[]> {
    return this.programs$;
  }

  getProgramById(id: number): Program | undefined {
    return this.programsSubject.value.find(p => p.id === id);
  }

  searchPrograms(query: string, degree: string, field: string): Program[] {
    const programs = this.programsSubject.value;
    return programs.filter(program => {
      const matchesSearch = program.name.toLowerCase().includes(query.toLowerCase()) ||
                           program.description.toLowerCase().includes(query.toLowerCase());
      const matchesDegree = degree === 'all' || program.degree.includes(degree);
      const matchesField = field === 'all' || program.field === field;
      return matchesSearch && matchesDegree && matchesField;
    });
  }

  private getAllPrograms(): Program[] {
    return [
      {
        id: 1,
        name: 'Computer Science',
        degree: 'Bachelor of Science',
        duration: '4 years',
        credits: 120,
        tuition: '$15,000/year',
        description: 'Comprehensive program covering programming, algorithms, AI, machine learning, and software engineering.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
        field: 'Technology',
        rating: 4.8,
        students: 850,
        employmentRate: 96,
        highlights: ['AI & Machine Learning', 'Software Development', 'Cybersecurity', 'Data Science'],
        careers: ['Software Engineer', 'Data Scientist', 'AI Specialist', 'Systems Architect']
      },
      {
        id: 2,
        name: 'Business Administration',
        degree: 'Bachelor of Business Administration',
        duration: '4 years',
        credits: 120,
        tuition: '$12,000/year',
        description: 'Learn business strategy, finance, marketing, entrepreneurship, and international business management.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
        field: 'Business',
        rating: 4.7,
        students: 1200,
        employmentRate: 94,
        highlights: ['Strategic Management', 'Digital Marketing', 'Finance', 'Entrepreneurship'],
        careers: ['Business Analyst', 'Marketing Manager', 'Entrepreneur', 'Financial Consultant']
      },
      {
        id: 3,
        name: 'Medicine',
        degree: 'Doctor of Medicine (MD)',
        duration: '6 years',
        credits: 240,
        tuition: '$25,000/year',
        description: 'Comprehensive medical training with extensive clinical experience and specialized rotations.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400',
        field: 'Health Sciences',
        rating: 4.9,
        students: 450,
        employmentRate: 99,
        highlights: ['Clinical Training', 'Surgery', 'Internal Medicine', 'Research'],
        careers: ['Physician', 'Surgeon', 'Medical Researcher', 'Specialist']
      },
      {
        id: 4,
        name: 'Mechanical Engineering',
        degree: 'Bachelor of Engineering',
        duration: '4 years',
        credits: 128,
        tuition: '$16,000/year',
        description: 'Study mechanics, thermodynamics, robotics, and advanced manufacturing technologies.',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400',
        field: 'Engineering',
        rating: 4.6,
        students: 680,
        employmentRate: 95,
        highlights: ['Robotics', 'CAD Design', 'Manufacturing', 'Renewable Energy'],
        careers: ['Mechanical Engineer', 'Design Engineer', 'Project Manager', 'Consultant']
      },
      {
        id: 5,
        name: 'Graphic Design',
        degree: 'Bachelor of Fine Arts',
        duration: '3 years',
        credits: 90,
        tuition: '$11,000/year',
        description: 'Creative arts program focusing on digital design, branding, UX/UI, and visual communication.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
        field: 'Arts',
        rating: 4.5,
        students: 420,
        employmentRate: 89,
        highlights: ['Digital Design', 'UX/UI', 'Branding', 'Motion Graphics'],
        careers: ['Graphic Designer', 'UX Designer', 'Creative Director', 'Brand Strategist']
      },
      {
        id: 6,
        name: 'Psychology',
        degree: 'Bachelor of Science',
        duration: '4 years',
        credits: 120,
        tuition: '$13,000/year',
        description: 'Study human behavior, cognitive processes, mental health, and therapeutic techniques.',
        image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=400',
        field: 'Social Sciences',
        rating: 4.7,
        students: 750,
        employmentRate: 91,
        highlights: ['Clinical Psychology', 'Cognitive Science', 'Research Methods', 'Counseling'],
        careers: ['Psychologist', 'Counselor', 'Researcher', 'HR Specialist']
      },
      {
        id: 7,
        name: 'Data Science',
        degree: 'Master of Science',
        duration: '2 years',
        credits: 60,
        tuition: '$18,000/year',
        description: 'Advanced program in big data analytics, machine learning, statistical modeling, and visualization.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
        field: 'Technology',
        rating: 4.9,
        students: 320,
        employmentRate: 98,
        highlights: ['Big Data', 'Machine Learning', 'Statistical Analysis', 'Data Visualization'],
        careers: ['Data Scientist', 'ML Engineer', 'Data Analyst', 'Research Scientist']
      },
      {
        id: 8,
        name: 'Civil Engineering',
        degree: 'Bachelor of Engineering',
        duration: '4 years',
        credits: 128,
        tuition: '$15,500/year',
        description: 'Infrastructure design, construction management, urban planning, and sustainable development.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400',
        field: 'Engineering',
        rating: 4.6,
        students: 540,
        employmentRate: 93,
        highlights: ['Structural Design', 'Urban Planning', 'Construction', 'Sustainability'],
        careers: ['Civil Engineer', 'Project Manager', 'Urban Planner', 'Consultant']
      }
    ];
  }
}
