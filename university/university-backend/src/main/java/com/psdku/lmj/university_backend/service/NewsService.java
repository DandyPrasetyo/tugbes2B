/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.psdku.lmj.university_backend.service;

import com.psdku.lmj.university_backend.model.News;
import com.psdku.lmj.university_backend.repository.NewsRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author LENOVO
 */
@Service
public class NewsService {
    
    @Autowired
    private NewsRepository newsRepository;
    
    public List<News> getAllNews() {
        return newsRepository.findByOrderByDateDesc();
    }
    
    public Optional<News> getNewsById(Long id) {
        return newsRepository.findById(id);
    }
    
    public List<News> getNewsByCategory(String category) {
        return newsRepository.findByCategory(category);
    }
    
    public News saveNews(News news) {
        return newsRepository.save(news);
    }
    
    public News incrementViews(Long id) {
        Optional<News> newsOptional = newsRepository.findById(id);
        if (newsOptional.isPresent()) {
            News news = newsOptional.get();
            news.setViews(news.getViews() + 1);
            return newsRepository.save(news);
        }
        return null;
    }
}
