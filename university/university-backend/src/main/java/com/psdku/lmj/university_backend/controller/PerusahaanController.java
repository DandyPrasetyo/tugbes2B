package com.psdku.lmj.university_backend.controller;

import com.psdku.lmj.university_backend.dto.ApiResponse;
import com.psdku.lmj.university_backend.model.Perusahaan;
import com.psdku.lmj.university_backend.service.PerusahaanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/perusahaan")
@CrossOrigin(origins = "*")
public class PerusahaanController {

    @Autowired
    private PerusahaanService perusahaanService;

    // GET all perusahaan
    @GetMapping
    public ResponseEntity<ApiResponse> getAllPerusahaan() {
        List<Perusahaan> perusahaan = perusahaanService.getAllPerusahaan();
        return ResponseEntity.ok(
                new ApiResponse(true, "Data perusahaan berhasil diambil", perusahaan)
        );
    }

    // GET perusahaan by ID
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getPerusahaanById(@PathVariable Long id) {
        Optional<Perusahaan> perusahaan = perusahaanService.getPerusahaanById(id);

        if (perusahaan.isEmpty()) {
            return ResponseEntity.status(404)
                    .body(new ApiResponse(false, "Perusahaan tidak ditemukan", null));
        }

        return ResponseEntity.ok(
                new ApiResponse(true, "Data perusahaan ditemukan", perusahaan.get())
        );
    }

    // POST perusahaan (Create)
    @PostMapping
    public ResponseEntity<ApiResponse> createPerusahaan(@RequestBody Perusahaan perusahaan) {

        // Validasi email & website (revisi tugas)
        ApiResponse validation = validatePerusahaan(perusahaan);
        if (!validation.isSuccess()) {
            return ResponseEntity.badRequest().body(validation);
        }

        Perusahaan created = perusahaanService.createPerusahaan(perusahaan);
        return ResponseEntity.ok(
                new ApiResponse(true, "Perusahaan berhasil ditambahkan", created)
        );
    }

    // PUT perusahaan (Update)
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updatePerusahaan(@PathVariable Long id,
                                                        @RequestBody Perusahaan perusahaan) {

        ApiResponse validation = validatePerusahaan(perusahaan);
        if (!validation.isSuccess()) {
            return ResponseEntity.badRequest().body(validation);
        }

        Perusahaan updated = perusahaanService.updatePerusahaan(id, perusahaan);
        return ResponseEntity.ok(
                new ApiResponse(true, "Perusahaan berhasil diperbarui", updated)
        );
    }

    // DELETE perusahaan
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deletePerusahaan(@PathVariable Long id) {
        perusahaanService.deletePerusahaan(id);
        return ResponseEntity.ok(
                new ApiResponse(true, "Perusahaan berhasil dihapus", null)
        );
    }

    // UPLOAD LOGO PERUSAHAAN
    @PostMapping(
            path = "/{id}/upload-logo",
            consumes = { MediaType.MULTIPART_FORM_DATA_VALUE }
    )
    public ResponseEntity<ApiResponse> uploadLogo(
            @PathVariable Long id,
            @RequestParam("file") MultipartFile file) {

        try {
            Perusahaan perusahaan = perusahaanService.uploadLogo(id, file);
            return ResponseEntity.ok(
                    new ApiResponse(true, "Logo berhasil diupload", perusahaan)
            );
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                    .body(new ApiResponse(false, e.getMessage(), null));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(new ApiResponse(false, "Gagal upload logo", null));
        }
    }

    // ============================
    //  VALIDASI EMAIL & WEBSITE
    // ============================
    private ApiResponse validatePerusahaan(Perusahaan p) {
        // Email wajib dan harus mengandung '@'
        if (p.getEmail() == null || p.getEmail().isBlank()) {
            return new ApiResponse(false, "Email perusahaan wajib diisi", null);
        }
        if (!p.getEmail().contains("@")) {
            return new ApiResponse(false, "Email perusahaan harus mengandung @", null);
        }

        // Website (jika diisi) harus diawali http:// atau https://
        if (p.getWebsite() != null && !p.getWebsite().isBlank()) {
            String w = p.getWebsite().trim();
            if (!(w.startsWith("http://") || w.startsWith("https://"))) {
                return new ApiResponse(false,
                        "Website harus diawali dengan http:// atau https://",
                        null);
            }
        }

        return new ApiResponse(true, "Valid", null);
    }
}
