/*
 * Service class for handling Perusahaan data
 * Author: Amanda / PSDku Lumajang Project
 */
package com.psdku.lmj.university_backend.service;

import com.psdku.lmj.university_backend.model.Perusahaan;
import com.psdku.lmj.university_backend.repository.PerusahaanRepository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class PerusahaanService {

    @Autowired
    private PerusahaanRepository perusahaanRepository;

    // GET ALL
    public List<Perusahaan> getAllPerusahaan() {
        return perusahaanRepository.findAll();
    }

    // GET BY ID
    public Optional<Perusahaan> getPerusahaanById(Long id) {
        return perusahaanRepository.findById(id);
    }

    // POST (Create)
    public Perusahaan createPerusahaan(Perusahaan perusahaan) {
        perusahaan.setCreatedAt(LocalDateTime.now());
        perusahaan.setUpdatedAt(LocalDateTime.now());
        return perusahaanRepository.save(perusahaan);
    }

    // PUT (Update)
    public Perusahaan updatePerusahaan(Long id, Perusahaan updatedPerusahaan) {

        Perusahaan perusahaan = perusahaanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Perusahaan not found"));

        perusahaan.setNamaPerusahaan(updatedPerusahaan.getNamaPerusahaan());
        perusahaan.setAlamat(updatedPerusahaan.getAlamat());
        perusahaan.setEmail(updatedPerusahaan.getEmail());
        perusahaan.setNoTelp(updatedPerusahaan.getNoTelp());
        perusahaan.setDeskripsi(updatedPerusahaan.getDeskripsi());
        perusahaan.setWebsite(updatedPerusahaan.getWebsite());
        perusahaan.setUpdatedAt(LocalDateTime.now());

        return perusahaanRepository.save(perusahaan);
    }

    // DELETE
    public void deletePerusahaan(Long id) {
        if (!perusahaanRepository.existsById(id)) {
            throw new RuntimeException("Perusahaan not found");
        }
        perusahaanRepository.deleteById(id);
    }

    // UPLOAD LOGO
    public Perusahaan uploadLogo(Long id, MultipartFile file) {
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("File logo tidak boleh kosong");
        }

        Perusahaan perusahaan = perusahaanRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Perusahaan tidak ditemukan"));

        String fileName = file.getOriginalFilename();
        perusahaan.setLogo(fileName);
        perusahaan.setUpdatedAt(LocalDateTime.now());

        // TODO: simpan file fisik ke storage

        return perusahaanRepository.save(perusahaan);
    }
}
