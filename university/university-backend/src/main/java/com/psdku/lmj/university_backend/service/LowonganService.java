package com.psdku.lmj.university_backend.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.psdku.lmj.university_backend.dto.LowonganRequest;
import com.psdku.lmj.university_backend.model.Admin;
import com.psdku.lmj.university_backend.model.Lowongan;
import com.psdku.lmj.university_backend.model.Perusahaan;
import com.psdku.lmj.university_backend.repository.AdminRepository;
import com.psdku.lmj.university_backend.repository.LowonganRepository;
import com.psdku.lmj.university_backend.repository.PerusahaanRepository;

@Service
public class LowonganService {

    private final LowonganRepository lowonganRepository;
    private final AdminRepository adminRepository;
    private final PerusahaanRepository perusahaanRepository;

    public LowonganService(LowonganRepository lowonganRepository,
                           AdminRepository adminRepository,
                           PerusahaanRepository perusahaanRepository) {

        this.lowonganRepository = lowonganRepository;
        this.adminRepository = adminRepository;
        this.perusahaanRepository = perusahaanRepository;
    }

    public List<Lowongan> getAllLowongan() {
        return lowonganRepository.findAll();
    }

    public Optional<Lowongan> getLowonganById(Long id) {
        return lowonganRepository.findById(id);
    }

    // =====================================================
    // CREATE LOWONGAN
    // =====================================================
    public Lowongan createLowonganFromRequest(LowonganRequest req, String posterPath) {

        Lowongan l = new Lowongan();

        l.setJudulLowongan(req.getJudulLowongan());
        l.setPosisi(req.getPosisi());
        l.setDeskripsi(req.getDeskripsi());

        // ✔ ENUM FIX (sesuai entity)
        l.setTipePekerjaan(Lowongan.TipePekerjaan.valueOf(req.getTipePekerjaan()));

        if (req.getGaji() != null) {
            l.setGaji(req.getGaji().longValue());
        }

        l.setBatasTanggal(req.getBatasTanggal());

        // ✔ ENUM FIX (sesuai entity)
        l.setStatus(Lowongan.StatusLowongan.valueOf(req.getStatus()));

        // lokasi
        l.setLokasi(req.getLokasi()); // <-- lokasi

        // ✔ Admin
        Long adminId = (req.getAdminId() != null) ? req.getAdminId() : 1L;
        Admin admin = adminRepository.findById(adminId)
                .orElseThrow(() -> new RuntimeException("Admin tidak ditemukan"));
        l.setAdmin(admin);

        // ✔ Perusahaan (WAJIB karena nullable=false)
        Perusahaan perusahaan = perusahaanRepository.findById(req.getPerusahaanId())
                .orElseThrow(() -> new RuntimeException("Perusahaan tidak ditemukan"));
        l.setPerusahaan(perusahaan);

        // ✔ Poster file
        if (posterPath != null) {
            l.setFlayer(posterPath);
        }

        return lowonganRepository.save(l);
    }

    // =====================================================
    // UPDATE LOWONGAN
    // =====================================================
    public Lowongan updateLowonganFromRequest(Long id, LowonganRequest req, String posterPath) {

        Lowongan l = lowonganRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Lowongan not found"));

        // Update hanya yang perlu (tidak merusak kode kamu)
        if (req.getJudulLowongan() != null) l.setJudulLowongan(req.getJudulLowongan());
        if (req.getPosisi() != null) l.setPosisi(req.getPosisi());
        if (req.getDeskripsi() != null) l.setDeskripsi(req.getDeskripsi());
        if (req.getTipePekerjaan() != null)
            l.setTipePekerjaan(Lowongan.TipePekerjaan.valueOf(req.getTipePekerjaan()));
        if (req.getGaji() != null) l.setGaji(req.getGaji().longValue());
        if (req.getBatasTanggal() != null) l.setBatasTanggal(req.getBatasTanggal());
        if (req.getStatus() != null)
            l.setStatus(Lowongan.StatusLowongan.valueOf(req.getStatus()));

        if (req.getLokasi() != null) {      // <-- lokasi
            l.setLokasi(req.getLokasi());
        }

        if (req.getAdminId() != null) {
            Admin admin = adminRepository.findById(req.getAdminId())
                    .orElseThrow(() -> new RuntimeException("Admin tidak ditemukan"));
            l.setAdmin(admin);
        }

        if (req.getPerusahaanId() != null) {
            Perusahaan perusahaan = perusahaanRepository.findById(req.getPerusahaanId())
                    .orElseThrow(() -> new RuntimeException("Perusahaan tidak ditemukan"));
            l.setPerusahaan(perusahaan);
        }

        if (posterPath != null) {
            l.setFlayer(posterPath);
        }

        return lowonganRepository.save(l);
    }

    // =====================================================
    // DELETE
    // =====================================================
    public void deleteLowongan(Long id) {
        lowonganRepository.deleteById(id);
    }

    // =====================================================
    // FILE UPLOAD
    // =====================================================
    public String savePosterFile(MultipartFile file) {
        if (file == null || file.isEmpty()) {
            return null;
        }

        try {
            String uploadDir = "uploads/poster";

            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            String originalName = file.getOriginalFilename();
            String fileName = System.currentTimeMillis() + "_" + originalName;

            Path filePath = uploadPath.resolve(fileName);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            return uploadDir + "/" + fileName;
        } catch (IOException e) {
            throw new RuntimeException("Gagal menyimpan file poster", e);
        }
    }
}
