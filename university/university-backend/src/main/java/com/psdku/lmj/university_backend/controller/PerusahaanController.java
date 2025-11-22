package com.psdku.lmj.university_backend.controller;

import com.psdku.lmj.university_backend.dto.ApiResponse;
import com.psdku.lmj.university_backend.model.Perusahaan;
import com.psdku.lmj.university_backend.service.PerusahaanService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        return ResponseEntity.ok(new ApiResponse(true, "Data perusahaan berhasil diambil", perusahaan));
    }
    
    // GET perusahaan by ID
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getPerusahaanById(@PathVariable Long id) {
        Optional<Perusahaan> perusahaan = perusahaanService.getPerusahaanById(id);
        return ResponseEntity.ok(new ApiResponse(true, "Data perusahaan ditemukan", perusahaan));
    }

    // POST perusahaan (Create)
    @PostMapping
    public ResponseEntity<ApiResponse> createPerusahaan(@RequestBody Perusahaan perusahaan) {
        Perusahaan created = perusahaanService.createPerusahaan(perusahaan);
        return ResponseEntity.ok(new ApiResponse(true, "Perusahaan berhasil ditambahkan", created));
    }

    // PUT perusahaan (Update)
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updatePerusahaan(@PathVariable Long id, @RequestBody Perusahaan perusahaan) {
        Perusahaan updated = perusahaanService.updatePerusahaan(id, perusahaan);
        return ResponseEntity.ok(new ApiResponse(true, "Perusahaan berhasil diperbarui", updated));
    }

    // DELETE perusahaan
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deletePerusahaan(@PathVariable Long id) {
        perusahaanService.deletePerusahaan(id);
        return ResponseEntity.ok(new ApiResponse(true, "Perusahaan berhasil dihapus", null));
    }
}