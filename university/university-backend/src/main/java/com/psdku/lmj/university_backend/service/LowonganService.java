package com.psdku.lmj.university_backend.service;

import com.psdku.lmj.university_backend.dto.LowonganRequest;
import com.psdku.lmj.university_backend.model.Lowongan;
import com.psdku.lmj.university_backend.repository.LowonganRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
public class LowonganService {

    private final LowonganRepository lowonganRepository;

    public LowonganService(LowonganRepository lowonganRepository) {
        this.lowonganRepository = lowonganRepository;
    }

    public List<Lowongan> getAllLowongan() {
        return lowonganRepository.findAll();
    }

    public Optional<Lowongan> getLowonganById(Long id) {
        return lowonganRepository.findById(id);
    }

    // IMPLEMENTASI MINIMAL – TANPA poster & mapping ribet
    public Lowongan createLowonganFromRequest(LowonganRequest req, String posterPath) {
        Lowongan l = new Lowongan();
        // isi field yang ADA di entity Lowongan milikmu, kalau belum tahu, kosongkan dulu:
        return lowonganRepository.save(l);
    }

    public Lowongan updateLowonganFromRequest(Long id, LowonganRequest req, String posterPath) {
        Lowongan l = lowonganRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Lowongan not found"));
        // belum diupdate apa‑apa, langsung simpan lagi
        return lowonganRepository.save(l);
    }

    public void deleteLowongan(Long id) {
        lowonganRepository.deleteById(id);
    }

    public String savePosterFile(MultipartFile file) {
        return null; // belum dipakai, cukup return null
    }
}
