/*
 * Controller untuk upload file (logo perusahaan)
 * Author: PSDku Lumajang Project
 */
package com.psdku.lmj.university_backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@RestController
@RequestMapping("/api/files")
@CrossOrigin(origins = "*")
public class FilesController {

    private static final String UPLOAD_DIR = "uploads/logo";

    @PostMapping("/logo")
    public ResponseEntity<?> uploadLogo(@RequestParam("file") MultipartFile file) {
        try {
            // Pastikan folder uploads/logo ada
            Path uploadPath = Paths.get(UPLOAD_DIR);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // Nama file unik
            String fileName = System.currentTimeMillis() + "-" + file.getOriginalFilename();
            Path target = uploadPath.resolve(fileName);

            // Simpan file di folder
            Files.copy(file.getInputStream(), target, StandardCopyOption.REPLACE_EXISTING);

            // Path yang disimpan ke kolom logo di tabel perusahaan
            String logoPath = UPLOAD_DIR + "/" + fileName;

            return ResponseEntity.ok(logoPath);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Gagal upload logo");
        }
    }
}
