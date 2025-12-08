package com.psdku.lmj.university_backend.controller;

import com.psdku.lmj.university_backend.repository.AdminRepository;
import com.psdku.lmj.university_backend.repository.LowonganRepository;
import com.psdku.lmj.university_backend.repository.PerusahaanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class DashboardController {

    @Autowired
    private LowonganRepository lowonganRepository;

    @Autowired
    private PerusahaanRepository perusahaanRepository;

    @Autowired
    private AdminRepository adminRepository;

    @GetMapping("/statistik")
    public Map<String, Long> getStatistik() {
        long totalLowongan = lowonganRepository.count();
        long totalPerusahaan = perusahaanRepository.count();
        long totalAdmin = adminRepository.count();

        return Map.of(
                "totalLowongan", totalLowongan,
                "totalPerusahaan", totalPerusahaan,
                "totalAdmin", totalAdmin
        );
    }
}
