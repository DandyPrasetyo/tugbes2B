package com.psdku.lmj.university_backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {

        // Handler umum untuk semua file di folder uploads
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:uploads/");

        // Handler khusus untuk logo perusahaan
        registry.addResourceHandler("/uploads/logo-perusahaan/**")
                .addResourceLocations("file:uploads/logo-perusahaan/");
    }
}
