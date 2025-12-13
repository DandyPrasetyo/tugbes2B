/*
 * Service class for handling Perusahaan data
 * Author: Amanda / PSDku Lumajang Project
 */
package com.psdku.lmj.university_backend.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.psdku.lmj.university_backend.model.Perusahaan;
import com.psdku.lmj.university_backend.repository.PerusahaanRepository;

@Service
public class PerusahaanService {

    @Autowired
    private PerusahaanRepository perusahaanRepository;

    // Folder dasar untuk menyimpan logo (relative ke root project)
    private static final String LOGO_UPLOAD_DIR = "uploads/logo-perusahaan";

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

        try {
            // Pastikan direktori ada
            Path uploadPath = Paths.get(LOGO_UPLOAD_DIR);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // Generate nama file unik supaya tidak bentrok
            String originalName = file.getOriginalFilename();
            String ext = "";
            if (originalName != null && originalName.contains(".")) {
                ext = originalName.substring(originalName.lastIndexOf("."));
            }
            String newFileName = "perusahaan-" + id + "-" + UUID.randomUUID() + ext;

            // Simpan file fisik
            Path target = uploadPath.resolve(newFileName);
            Files.copy(file.getInputStream(), target);

            // Simpan path / nama file di database
            perusahaan.setLogo(newFileName);
            perusahaan.setUpdatedAt(LocalDateTime.now());

            return perusahaanRepository.save(perusahaan);
        } catch (IOException e) {
            throw new RuntimeException("Gagal menyimpan file logo", e);
        }
    }
}
