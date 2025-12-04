package com.psdku.lmj.university_backend.controller;

import com.psdku.lmj.university_backend.dto.ApiResponse;
import com.psdku.lmj.university_backend.dto.LowonganRequest;
import com.psdku.lmj.university_backend.model.Lowongan;
import com.psdku.lmj.university_backend.service.LowonganService;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/lowongan")
@CrossOrigin(origins = "*")
public class LowonganController {

    @Autowired
    private LowonganService lowonganService;

    @GetMapping
    public ResponseEntity<ApiResponse> getAllLowongan() {
        List<Lowongan> lowongan = lowonganService.getAllLowongan();
        return ResponseEntity.ok(new ApiResponse(true, "Data lowongan berhasil diambil", lowongan));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getLowonganById(@PathVariable Long id) {
        Optional<Lowongan> lowongan = lowonganService.getLowonganById(id);
        return ResponseEntity.ok(new ApiResponse(true, "Data lowongan ditemukan", lowongan));
    }

    @GetMapping("/aktif")
    public ResponseEntity<ApiResponse> getLowonganAktif() {
        List<Lowongan> aktif = lowonganService.getLowonganAktif();
        return ResponseEntity.ok(new ApiResponse(true, "Data lowongan aktif berhasil diambil", aktif));
    }

    @GetMapping("/before-deadline")
    public ResponseEntity<ApiResponse> getLowonganBeforeDeadline() {
        List<Lowongan> upcoming = lowonganService.getLowonganSebelumDeadline(LocalDate.now());
        return ResponseEntity.ok(new ApiResponse(true, "Data lowongan sebelum deadline berhasil diambil", upcoming));
    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponse> searchLowongan(
            @RequestParam(required = false) String query,
            @RequestParam(required = false) String tipe_pekerjaan,
            @RequestParam(required = false) String status) {

        List<Lowongan> hasil = lowonganService.searchLowongan(query, tipe_pekerjaan, status);
        return ResponseEntity.ok(new ApiResponse(true, "Hasil pencarian lowongan", hasil));
    }

    @GetMapping("/by-perusahaan/{perusahaanId}")
    public ResponseEntity<ApiResponse> getLowonganByPerusahaan(@PathVariable Long perusahaanId) {
        List<Lowongan> hasil = lowonganService.getLowonganByPerusahaan(perusahaanId);
        return ResponseEntity.ok(new ApiResponse(true, "Data lowongan perusahaan berhasil diambil", hasil));
    }

    // ===== CREATE pakai DTO supaya admin_id & perusahaan_id terisi =====
    @PostMapping
    public ResponseEntity<ApiResponse> createLowongan(@RequestBody LowonganRequest lowonganReq) {
        Lowongan created = lowonganService.createLowonganFromRequest(lowonganReq);
        return ResponseEntity.ok(new ApiResponse(true, "Lowongan berhasil ditambahkan", created));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateLowongan(
            @PathVariable Long id,
            @RequestBody Lowongan updatedLowongan) {

        Lowongan updated = lowonganService.updateLowongan(id, updatedLowongan);
        return ResponseEntity.ok(new ApiResponse(true, "Lowongan berhasil diperbarui", updated));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteLowongan(@PathVariable Long id) {
        lowonganService.deleteLowongan(id);
        return ResponseEntity.ok(new ApiResponse(true, "Lowongan berhasil dihapus", null));
    }
}
