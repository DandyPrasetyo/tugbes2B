/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }
}
*/

// ========================================
// NEWS SERVICE
// ========================================

// src/app/services/news.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsSubject = new BehaviorSubject<News[]>(this.getAllNews());
  public news$ = this.newsSubject.asObservable();

  getNews(): Observable<News[]> {
    return this.news$;
  }

  getNewsById(id: number): News | undefined {
    return this.newsSubject.value.find(n => n.id === id);
  }

  private getAllNews(): News[] {
    return [
      {
        id: 1,
        title: 'Excellence University Ranks Among Top 100 Universities Globally',
        date: '2025-10-18',
        category: 'Achievement',
        author: 'Dr. Sarah Mitchell',
        excerpt: 'Our university has been recognized in the latest QS World University Rankings, climbing 15 positions to secure a spot in the top 100...',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600',
        content: 'Full article content here...',
        views: 5420,
        likes: 892
      },
      {
        id: 2,
        title: 'New AI Research Center Opens with $50M Funding',
        date: '2025-10-15',
        category: 'Research',
        author: 'Prof. James Chen',
        excerpt: 'State-of-the-art artificial intelligence research facility launches this month, featuring advanced GPU clusters and collaborative spaces...',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600',
        content: 'Full article content here...',
        views: 4230,
        likes: 756
      },
      {
        id: 3,
        title: 'Engineering Student Wins National Innovation Competition',
        date: '2025-10-12',
        category: 'Student Achievement',
        author: 'Media Relations',
        excerpt: 'Fourth-year mechanical engineering student develops revolutionary sustainable energy solution...',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600',
        content: 'Full article content here...',
        views: 3890,
        likes: 1024
      },
      {
        id: 4,
        title: 'Partnership with Leading Tech Companies Announced',
        date: '2025-10-08',
        category: 'Partnership',
        author: 'Corporate Relations',
        excerpt: 'New collaboration will provide internship opportunities and cutting-edge research funding...',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
        content: 'Full article content here...',
        views: 4567,
        likes: 823
      },
      {
        id: 5,
        title: 'Medical School Breakthrough in Cancer Research',
        date: '2025-10-05',
        category: 'Research',
        author: 'Dr. Emily Rodriguez',
        excerpt: 'Groundbreaking discovery in immunotherapy could revolutionize cancer treatment protocols...',
        image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600',
        content: 'Full article content here...',
        views: 6234,
        likes: 1456
      },
      {
        id: 6,
        title: 'Campus Sustainability Initiative Achieves Carbon Neutrality',
        date: '2025-10-01',
        category: 'Sustainability',
        author: 'Environmental Office',
        excerpt: 'University becomes first in the region to achieve complete carbon neutrality ahead of schedule...',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600',
        content: 'Full article content here...',
        views: 3456,
        likes: 678
      }
    ];
  }
}