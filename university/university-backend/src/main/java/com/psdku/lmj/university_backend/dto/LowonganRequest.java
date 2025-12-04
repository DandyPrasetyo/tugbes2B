package com.psdku.lmj.university_backend.dto;

import lombok.Data;
import com.psdku.lmj.university_backend.model.Lowongan;
import java.time.LocalDate;

@Data
public class LowonganRequest {
    private Long adminId;
    private Long perusahaanId;
    private String judulLowongan;
    private String posisi;
    private String deskripsi;
    private String flayer;
    private Lowongan.TipePekerjaan tipePekerjaan;
    private Long gaji;
    private LocalDate batasTanggal;
    private Lowongan.StatusLowongan status;
}
