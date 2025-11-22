package com.psdku.lmj.university_backend.service;

import com.psdku.lmj.university_backend.model.Lowongan;
import com.psdku.lmj.university_backend.model.Perusahaan;
import com.psdku.lmj.university_backend.repository.LowonganRepository;
import com.psdku.lmj.university_backend.repository.PerusahaanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class LowonganService {

    @Autowired
    private LowonganRepository lowonganRepository;

    @Autowired
    private PerusahaanRepository perusahaanRepository;

    // ===== GET search lowongan =====
    public List<Lowongan> searchLowongan(String query, String tipe_pekerjaan, String status) {
        Lowongan.TipePekerjaan tipeEnum = parseTipe(tipe_pekerjaan);
        Lowongan.StatusLowongan statusEnum = parseStatus(status);

        return lowonganRepository.search(query, tipeEnum, statusEnum);
    }

    // GET lowongan by perusahaan
    public List<Lowongan> getLowonganByPerusahaan(Long perusahaanId) {
        Optional<Perusahaan> perusahaanOpt = perusahaanRepository.findById(perusahaanId);
        return perusahaanOpt.map(lowonganRepository::findByPerusahaan).orElse(List.of());
    }

    // GET all
    public List<Lowongan> getAllLowongan() {
        return lowonganRepository.findAll();
    }

    public Optional<Lowongan> getLowonganById(Long id) {
        return lowonganRepository.findById(id);
    }

    public List<Lowongan> getLowonganAktif() {
        return lowonganRepository.findByStatus(Lowongan.StatusLowongan.Aktif);
    }

    public List<Lowongan> getLowonganSebelumDeadline(LocalDate date) {
        return lowonganRepository.findByBatasTanggalAfterOrderByBatasTanggalAsc(date);
    }

    // ===== Converter String ke Enum =====
    private Lowongan.TipePekerjaan parseTipe(String tipe_pekerjaan) {
        if (tipe_pekerjaan == null) return null;
        switch (tipe_pekerjaan.toLowerCase()) {
            case "full-time":
            case "full_time":
            case "fulltime":
                return Lowongan.TipePekerjaan.Full_time;
            case "part-time":
            case "part_time":
            case "parttime":
                return Lowongan.TipePekerjaan.Part_time;

            case "magang":
                return Lowongan.TipePekerjaan.Magang;
            default:
                return null;
        }
    }

    private Lowongan.StatusLowongan parseStatus(String status) {
        if (status == null) return null;
        switch (status.toLowerCase()) {
            case "aktif":
                return Lowongan.StatusLowongan.Aktif;
            case "tutup":
                return Lowongan.StatusLowongan.Tutup;
            default:
                return null;
        }
    }

    // ========================
    // ===== CREATE =====
    // ========================
    public Lowongan createLowongan(Lowongan lowongan) {
        return lowonganRepository.save(lowongan);
    }

    // ========================
    // ===== UPDATE =====
    // ========================
    public Lowongan updateLowongan(Long id, Lowongan updatedLowongan) {
        Optional<Lowongan> existingOpt = lowonganRepository.findById(id);

        if (existingOpt.isEmpty()) {
            throw new RuntimeException("Lowongan dengan ID " + id + " tidak ditemukan");
        }

        Lowongan existing = existingOpt.get();

        existing.setJudulLowongan(updatedLowongan.getJudulLowongan());
        existing.setPosisi(updatedLowongan.getPosisi());
        existing.setDeskripsi(updatedLowongan.getDeskripsi());
        existing.setFlayer(updatedLowongan.getFlayer());
        existing.setTipePekerjaan(updatedLowongan.getTipePekerjaan());
        existing.setGaji(updatedLowongan.getGaji());
        existing.setBatasTanggal(updatedLowongan.getBatasTanggal());
        existing.setStatus(updatedLowongan.getStatus());
        existing.setPerusahaan(updatedLowongan.getPerusahaan());
        existing.setAdmin(updatedLowongan.getAdmin());

        return lowonganRepository.save(existing);
    }

    // ========================
    // ===== DELETE =====
    // ========================
    public void deleteLowongan(Long id) {
        if (!lowonganRepository.existsById(id)) {
            throw new RuntimeException("Lowongan tidak ditemukan");
        }
        lowonganRepository.deleteById(id);
    }
}