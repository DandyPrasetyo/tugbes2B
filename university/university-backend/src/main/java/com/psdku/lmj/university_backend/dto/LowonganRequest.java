package com.psdku.lmj.university_backend.dto;

import java.time.LocalDate;

public class LowonganRequest {

    private String judulLowongan;
    private String posisi;
    private String deskripsi;
    private String tipePekerjaan; // STRING, nanti di-convert di Service
    private Integer gaji;
    private LocalDate batasTanggal;
    private String status; // STRING, nanti di-convert ke ENUM
    private Long adminId;
    private Long perusahaanId;

    public LowonganRequest() {}

    public LowonganRequest(String judulLowongan, String posisi, String deskripsi, String tipePekerjaan,
                           Integer gaji, LocalDate batasTanggal, String status,
                           Long adminId, Long perusahaanId) {

        this.judulLowongan = judulLowongan;
        this.posisi = posisi;
        this.deskripsi = deskripsi;
        this.tipePekerjaan = tipePekerjaan;
        this.gaji = gaji;
        this.batasTanggal = batasTanggal;
        this.status = status;
        this.adminId = adminId;
        this.perusahaanId = perusahaanId;
    }

    // GETTERS & SETTERS
    public String getJudulLowongan() { return judulLowongan; }
    public void setJudulLowongan(String judulLowongan) { this.judulLowongan = judulLowongan; }

    public String getPosisi() { return posisi; }
    public void setPosisi(String posisi) { this.posisi = posisi; }

    public String getDeskripsi() { return deskripsi; }
    public void setDeskripsi(String deskripsi) { this.deskripsi = deskripsi; }

    public String getTipePekerjaan() { return tipePekerjaan; }
    public void setTipePekerjaan(String tipePekerjaan) { this.tipePekerjaan = tipePekerjaan; }

    public Integer getGaji() { return gaji; }
    public void setGaji(Integer gaji) { this.gaji = gaji; }

    public LocalDate getBatasTanggal() { return batasTanggal; }
    public void setBatasTanggal(LocalDate batasTanggal) { this.batasTanggal = batasTanggal; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public Long getAdminId() { return adminId; }
    public void setAdminId(Long adminId) { this.adminId = adminId; }

    public Long getPerusahaanId() { return perusahaanId; }
    public void setPerusahaanId(Long perusahaanId) { this.perusahaanId = perusahaanId; }
}
