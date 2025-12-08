package com.psdku.lmj.university_backend.controller;

import com.psdku.lmj.university_backend.dto.ApiResponse;
import com.psdku.lmj.university_backend.dto.LowonganRequest;
import com.psdku.lmj.university_backend.model.Lowongan;
import com.psdku.lmj.university_backend.service.LowonganService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/lowongan")
@CrossOrigin(origins = "*")
public class LowonganController {

    @Autowired
    private LowonganService lowonganService;

    // ================================
    // GET ALL
    // ================================
    @GetMapping
    public ResponseEntity<ApiResponse> getAllLowongan() {
        List<Lowongan> list = lowonganService.getAllLowongan();
        return ResponseEntity.ok(new ApiResponse(true, "Data lowongan berhasil diambil", list));
    }

    // ================================
    // GET BY ID
    // ================================
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getLowonganById(@PathVariable Long id) {
        Optional<Lowongan> lowongan = lowonganService.getLowonganById(id);

        if (lowongan.isEmpty()) {
            return ResponseEntity
                    .status(404)
                    .body(new ApiResponse(false, "Lowongan tidak ditemukan", null));
        }

        return ResponseEntity.ok(new ApiResponse(true, "Data lowongan ditemukan", lowongan.get()));
    }

    // ================================
    // CREATE (MULTIPART)
    // ================================
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ApiResponse> createLowongan(
            @RequestPart("lowongan") LowonganRequest req,
            @RequestPart(value = "poster", required = false) MultipartFile posterFile
    ) {

        String posterPath = null;

        if (posterFile != null && !posterFile.isEmpty()) {
            posterPath = lowonganService.savePosterFile(posterFile);
        }

        Lowongan created = lowonganService.createLowonganFromRequest(req, posterPath);
        return ResponseEntity.ok(new ApiResponse(true, "Lowongan berhasil dibuat", created));
    }

    // ================================
    // UPDATE (JSON ONLY)
    // ================================
    @PutMapping(path = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ApiResponse> updateLowonganJson(
            @PathVariable Long id,
            @RequestBody LowonganRequest req
    ) {
        Lowongan updated = lowonganService.updateLowonganFromRequest(id, req, null);
        return ResponseEntity.ok(new ApiResponse(true, "Lowongan berhasil diperbarui", updated));
    }

    // ================================
    // UPDATE (MULTIPART FORM-DATA)
    // ================================
    @PutMapping(path = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ApiResponse> updateLowonganMultipart(
            @PathVariable Long id,
            @RequestParam(required = false) String judulLowongan,
            @RequestParam(required = false) String posisi,
            @RequestParam(required = false) String deskripsi,
            @RequestParam(required = false) String tipePekerjaan,
            @RequestParam(required = false) Integer gaji,
            @RequestParam(required = false) String batasTanggal, // yyyy-MM-dd
            @RequestParam(required = false) String status,
            @RequestParam(required = false) Long adminId,
            @RequestParam(required = false) Long perusahaanId,
            @RequestPart(value = "poster", required = false) MultipartFile posterFile
    ) {

        LocalDate parsedDate = null;

        if (batasTanggal != null && !batasTanggal.isBlank()) {
            try {
                parsedDate = LocalDate.parse(batasTanggal);
            } catch (DateTimeParseException e) {
                return ResponseEntity.badRequest()
                        .body(new ApiResponse(false, "Format tanggal salah (yyyy-MM-dd)", null));
            }
        }

        // Build DTO
        LowonganRequest req = new LowonganRequest();
        req.setJudulLowongan(judulLowongan);
        req.setPosisi(posisi);
        req.setDeskripsi(deskripsi);
        req.setTipePekerjaan(tipePekerjaan);
        req.setGaji(gaji);
        req.setBatasTanggal(parsedDate);
        req.setStatus(status);
        req.setAdminId(adminId);
        req.setPerusahaanId(perusahaanId);

        String posterPath = null;

        if (posterFile != null && !posterFile.isEmpty()) {
            posterPath = lowonganService.savePosterFile(posterFile);
        }

        Lowongan updated = lowonganService.updateLowonganFromRequest(id, req, posterPath);

        return ResponseEntity.ok(new ApiResponse(true, "Lowongan berhasil diperbarui", updated));
    }

    // ================================
    // DELETE
    // ================================
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteLowongan(@PathVariable Long id) {
        lowonganService.deleteLowongan(id);
        return ResponseEntity.ok(new ApiResponse(true, "Lowongan berhasil dihapus", null));
    }
}
