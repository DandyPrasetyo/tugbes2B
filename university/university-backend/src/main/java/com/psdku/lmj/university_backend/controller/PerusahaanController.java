package com.psdku.lmj.university_backend.controller;

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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.psdku.lmj.university_backend.dto.ApiResponse;
import com.psdku.lmj.university_backend.model.Perusahaan;
import com.psdku.lmj.university_backend.service.PerusahaanService;

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

        // Validasi dasar di controller: wajib ada file
        if (file == null || file.isEmpty()) {
            return ResponseEntity.badRequest()
                    .body(new ApiResponse(false, "File logo wajib diupload", null));
        }

        // Batas ukuran 2MB
        long maxSize = 2 * 1024 * 1024; // 2MB
        if (file.getSize() > maxSize) {
            return ResponseEntity.badRequest()
                    .body(new ApiResponse(false, "Ukuran logo maksimal 2MB", null));
        }

        // Validasi MIME type image yang diizinkan
        String contentType = file.getContentType();
        if (contentType == null ||
                !(contentType.equals("image/png") ||
                  contentType.equals("image/jpeg") ||
                  contentType.equals("image/jpg") ||
                  contentType.equals("image/svg+xml") ||
                  contentType.equals("image/gif") ||
                  contentType.equals("image/webp"))) {
            return ResponseEntity.badRequest()
                    .body(new ApiResponse(false,
                            "Format logo tidak didukung. Gunakan PNG, JPG, JPEG, SVG, GIF, atau WebP",
                            null));
        }

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
