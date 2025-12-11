package com.psdku.lmj.university_backend.controller;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.psdku.lmj.university_backend.dto.ApiResponse;
import com.psdku.lmj.university_backend.dto.LowonganRequest;
import com.psdku.lmj.university_backend.model.Lowongan;
import com.psdku.lmj.university_backend.service.LowonganService;

@RestController
@RequestMapping("/api/lowongan")
@CrossOrigin(origins = "*")
public class LowonganController {

    @Autowired
    private LowonganService lowonganService;

    // GET ALL
    @GetMapping
    public ResponseEntity<ApiResponse> getAllLowongan() {
        List<Lowongan> list = lowonganService.getAllLowongan();
        return ResponseEntity.ok(new ApiResponse(true, "Data lowongan berhasil diambil", list));
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getLowonganById(@PathVariable Long id) {
        Optional<Lowongan> lowongan = lowonganService.getLowonganById(id);

        if (lowongan.isEmpty()) {
            return ResponseEntity.status(404)
                    .body(new ApiResponse(false, "Lowongan tidak ditemukan", null));
        }

        return ResponseEntity.ok(
                new ApiResponse(true, "Data lowongan ditemukan", lowongan.get())
        );
    }

    // CREATE (MULTIPART)
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ApiResponse> createLowongan(
            @RequestPart("lowongan") LowonganRequest req,
            @RequestPart(value = "flayer", required = false) MultipartFile posterFile
    ) {

        String posterPath = null;

        if (posterFile != null && !posterFile.isEmpty()) {
            posterPath = lowonganService.savePosterFile(posterFile);
        }

        Lowongan created = lowonganService.createLowonganFromRequest(req, posterPath);
        return ResponseEntity.ok(new ApiResponse(true, "Lowongan berhasil dibuat", created));
    }

    // CREATE (JSON ONLY)
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ApiResponse> createLowonganJson(@RequestBody LowonganRequest req) {
        Lowongan created = lowonganService.createLowonganFromRequest(req, null);
        return ResponseEntity.ok(new ApiResponse(true, "Lowongan berhasil dibuat", created));
    }

    // UPDATE (JSON ONLY)
    @PutMapping(path = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ApiResponse> updateLowonganJson(
            @PathVariable Long id,
            @RequestBody LowonganRequest req
    ) {
        Lowongan updated = lowonganService.updateLowonganFromRequest(id, req, null);
        return ResponseEntity.ok(new ApiResponse(true, "Lowongan berhasil diperbarui", updated));
    }

    // UPDATE MULTIPART
    @PutMapping(path = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ApiResponse> updateLowonganMultipart(
            @PathVariable Long id,
            @RequestParam(required = false) String judulLowongan,
            @RequestParam(required = false) String posisi,
            @RequestParam(required = false) String deskripsi,
            @RequestParam(required = false) String tipePekerjaan,
            @RequestParam(required = false) Long gaji,        // <-- FIX INT → LONG
            @RequestParam(required = false) String batasTanggal,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) Long adminId,
            @RequestParam(required = false) Long perusahaanId,
            @RequestPart(value = "flayer", required = false) MultipartFile posterFile
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

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteLowongan(@PathVariable Long id) {
        lowonganService.deleteLowongan(id);
        return ResponseEntity.ok(new ApiResponse(true, "Lowongan berhasil dihapus", null));
    }
}
