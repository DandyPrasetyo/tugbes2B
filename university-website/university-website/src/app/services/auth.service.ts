/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
*/

// ========================================
// AUTH SERVICE (COMPLETE)
// ========================================

// src/app/services/auth.service.ts (COMPLETE VERSION)
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private currentStudentSubject = new BehaviorSubject<Student | null>(null);
  public currentStudent$ = this.currentStudentSubject.asObservable();

  login(studentId: string, password: string): boolean {
    // Mock authentication - in production, call backend API
    if (studentId && password) {
      this.isAuthenticatedSubject.next(true);
      this.currentStudentSubject.next(this.getMockStudentData());
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    this.currentStudentSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  private getMockStudentData(): Student {
    return {
      id: 'STU2025001234',
      name: 'John Doe',
      email: 'john.doe@excellence.edu',
      major: 'Computer Science',
      year: 'Junior',
      gpa: 3.85,
      credits: 90,
      totalCredits: 120,
      attendance: 95,
      currentCourses: [
        {
          code: 'CS301',
          name: 'Data Structures & Algorithms',
          instructor: 'Dr. Sarah Smith',
          grade: 'A-',
          progress: 75,
          credits: 4,
          schedule: 'Mon, Wed 10:00-11:30 AM',
          room: 'CS Building 301'
        },
        {
          code: 'MATH205',
          name: 'Linear Algebra',
          instructor: 'Prof. Michael Johnson',
          grade: 'B+',
          progress: 70,
          credits: 3,
          schedule: 'Tue, Thu 2:00-3:15 PM',
          room: 'Math Building 205'
        },
        {
          code: 'ENG210',
          name: 'Technical Writing',
          instructor: 'Dr. Emily Williams',
          grade: 'A',
          progress: 80,
          credits: 3,
          schedule: 'Mon, Wed 1:00-2:15 PM',
          room: 'Liberal Arts 102'
        },
        {
          code: 'CS350',
          name: 'Database Systems',
          instructor: 'Prof. David Brown',
          grade: 'A-',
          progress: 65,
          credits: 4,
          schedule: 'Tue, Thu 10:00-11:30 AM',
          room: 'CS Building 405'
        },
        {
          code: 'BUS101',
          name: 'Business Ethics',
          instructor: 'Dr. Lisa Davis',
          grade: 'B',
          progress: 60,
          credits: 2,
          schedule: 'Fri 9:00-11:00 AM',
          room: 'Business Building 201'
        }
      ],
      upcomingAssignments: [
        { course: 'CS301', title: 'Algorithm Analysis Project', dueDate: '2025-10-25', status: 'pending' },
        { course: 'MATH205', title: 'Problem Set 8', dueDate: '2025-10-23', status: 'pending' },
        { course: 'CS350', title: 'Database Design Assignment', dueDate: '2025-10-28', status: 'pending' }
      ],
      announcements: [
        { title: 'Midterm Schedule Released', date: '2025-10-20', important: true },
        { title: 'Career Fair Registration Open', date: '2025-10-19', important: false },
        { title: 'Library Extended Hours', date: '2025-10-18', important: false }
      ]
    };
  }
}