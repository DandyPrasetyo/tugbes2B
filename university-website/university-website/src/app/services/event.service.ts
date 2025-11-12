/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }
}
*/

// ========================================
// EVENT SERVICE
// ========================================

// src/app/services/event.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsSubject = new BehaviorSubject<Event[]>(this.getAllEvents());
  public events$ = this.eventsSubject.asObservable();

  getEvents(): Observable<Event[]> {
    return this.events$;
  }

  getEventById(id: number): Event | undefined {
    return this.eventsSubject.value.find(e => e.id === id);
  }

  registerForEvent(eventId: number): boolean {
    const events = this.eventsSubject.value;
    const event = events.find(e => e.id === eventId);
    
    if (event && event.registrations < event.capacity) {
      event.registrations++;
      this.eventsSubject.next([...events]);
      return true;
    }
    return false;
  }

  private getAllEvents(): Event[] {
    return [
      {
        id: 1,
        title: 'Fall Open House 2025',
        date: '2025-11-15',
        time: '9:00 AM - 4:00 PM',
        location: 'Main Campus, Student Center',
        type: 'Admissions',
        description: 'Visit campus, meet faculty, attend sample lectures, and explore our facilities.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
        registrations: 450,
        capacity: 500,
        speakers: ['President Dr. Williams', 'Dean of Admissions']
      },
      {
        id: 2,
        title: 'Career Fair 2025',
        date: '2025-11-20',
        time: '10:00 AM - 6:00 PM',
        location: 'University Convention Center',
        type: 'Career',
        description: 'Meet with 150+ employers from top companies across various industries.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400',
        registrations: 1200,
        capacity: 2000,
        speakers: ['Industry Leaders', 'Alumni Panel']
      },
      {
        id: 3,
        title: 'Annual Research Symposium',
        date: '2025-12-01',
        time: '1:00 PM - 7:00 PM',
        location: 'Science Building, Conference Hall A',
        type: 'Academic',
        description: 'Showcase of groundbreaking research from faculty and graduate students.',
        image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400',
        registrations: 320,
        capacity: 400,
        speakers: ['Dr. Chen', 'Dr. Patel', 'Dr. Johnson']
      },
      {
        id: 4,
        title: 'International Students Welcome Week',
        date: '2025-11-25',
        time: '9:00 AM - 5:00 PM',
        location: 'International Center',
        type: 'Student Life',
        description: 'Orientation and welcome activities for international students.',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
        registrations: 280,
        capacity: 350,
        speakers: ['International Office Staff']
      },
      {
        id: 5,
        title: 'Innovation & Entrepreneurship Summit',
        date: '2025-12-10',
        time: '8:00 AM - 6:00 PM',
        location: 'Business School Auditorium',
        type: 'Business',
        description: 'Learn from successful entrepreneurs and pitch your startup ideas.',
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400',
        registrations: 380,
        capacity: 500,
        speakers: ['Serial Entrepreneurs', 'VC Investors', 'Alumni Founders']
      },
      {
        id: 6,
        title: 'Arts & Culture Festival',
        date: '2025-12-15',
        time: '12:00 PM - 10:00 PM',
        location: 'Campus Grounds',
        type: 'Cultural',
        description: 'Celebrate diversity with performances, exhibitions, and international cuisine.',
        image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400',
        registrations: 890,
        capacity: 1500,
        speakers: ['Student Performers', 'Cultural Groups']
      }
    ];
  }
}