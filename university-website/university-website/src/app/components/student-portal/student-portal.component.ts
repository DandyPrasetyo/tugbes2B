/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-portal',
  standalone: true,
  imports: [],
  templateUrl: './student-portal.component.html',
  styleUrl: './student-portal.component.css'
})
export class StudentPortalComponent {

}
*/

// ========================================
// STUDENT PORTAL COMPONENT
// ========================================

// src/app/components/student-portal/student-portal.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { 
  LucideAngularModule, 
  GraduationCap, Award, BookOpen, Users, 
  CheckCircle, Clock, MapPin, Calendar, 
  FileText, Bell, TrendingUp, Globe 
} from 'lucide-angular';
import { AuthService } from '../../services/auth.service';
import { Student, Course } from '../../models/student.model';

@Component({
  selector: 'app-student-portal',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.css']
})
export class StudentPortalComponent implements OnInit, OnDestroy {
  // Icons
  readonly GraduationCap = GraduationCap;
  readonly Award = Award;
  readonly BookOpen = BookOpen;
  readonly Users = Users;
  readonly CheckCircle = CheckCircle;
  readonly Clock = Clock;
  readonly MapPin = MapPin;
  readonly Calendar = Calendar;
  readonly FileText = FileText;
  readonly Bell = Bell;
  readonly TrendingUp = TrendingUp;
  readonly Globe = Globe;

  // Auth state
  isAuthenticated = false;
  currentStudent: Student | null = null;

  // Login form
  studentId = '';
  password = '';
  loginError = '';

  // Quick actions
  quickActions = [
    { title: 'Course Registration', icon: BookOpen, color: 'blue' },
    { title: 'Financial Services', icon: Award, color: 'green' },
    { title: 'Academic Calendar', icon: Calendar, color: 'purple' },
    { title: 'Library Resources', icon: BookOpen, color: 'orange' },
    { title: 'Career Services', icon: TrendingUp, color: 'red' },
    { title: 'IT Support', icon: Globe, color: 'indigo' }
  ];

  private destroy$ = new Subject<void>();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isAuthenticated$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isAuth: boolean) => {
        this.isAuthenticated = isAuth;
      });

    this.authService.currentStudent$
      .pipe(takeUntil(this.destroy$))
      .subscribe((student: Student | null) => {
        this.currentStudent = student;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onLogin(): void {
    this.loginError = '';
    
    if (!this.studentId || !this.password) {
      this.loginError = 'Please enter both Student ID and Password';
      return;
    }

    const success = this.authService.login(this.studentId, this.password);
    
    if (!success) {
      this.loginError = 'Invalid credentials';
    }
  }

  onLogout(): void {
    this.authService.logout();
    this.studentId = '';
    this.password = '';
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }

  getDaysUntilDue(dueDate: string): number {
    const due = new Date(dueDate);
    const now = new Date();
    const diff = due.getTime() - now.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  getProgressWidth(progress: number): string {
    return `${progress}%`;
  }

  viewCourseMaterials(course: Course): void {
    alert(`Opening materials for ${course.name}`);
  }

  viewAssignments(course: Course): void {
    alert(`Opening assignments for ${course.name}`);
  }
}