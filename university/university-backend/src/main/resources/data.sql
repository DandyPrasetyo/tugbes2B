-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 12, 2025 at 06:28 PM
-- Server version: 8.4.3
-- PHP Version: 8.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loker`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` bigint UNSIGNED NOT NULL,
  `nama_admin` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_admin` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password_admin` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `nama_admin`, `email_admin`, `password_admin`, `created_at`, `updated_at`) VALUES
(1, 'polinema', 'cs@polinema.ac.id', '$2y$12$8EdXTYOewGFS/jqbaJnOoeCNbAYPXJE0T9VTNhT8gFCuQVi6lbMpW', '2025-10-16 15:09:14', '2025-10-16 15:09:14');

-- --------------------------------------------------------

--
-- Table structure for table `lowongan`
--

CREATE TABLE `lowongan` (
  `lowongan_id` bigint UNSIGNED NOT NULL,
  `admin_id` bigint UNSIGNED NOT NULL,
  `perusahaan_id` bigint UNSIGNED NOT NULL,
  `judul_lowongan` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `posisi` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci,
  `flayer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipe_pekerjaan` enum('Full-time','Part-time','Magang') COLLATE utf8mb4_unicode_ci NOT NULL,
  `gaji` bigint DEFAULT NULL,
  `batas_tanggal` date NOT NULL,
  `status` enum('Aktif','Tutup') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Aktif',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `lowongan`
--

INSERT INTO `lowongan` (`lowongan_id`, `admin_id`, `perusahaan_id`, `judul_lowongan`, `posisi`, `deskripsi`, `flayer`, `tipe_pekerjaan`, `gaji`, `batas_tanggal`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'BMDP OIA Sinarmas', 'Internal Audit Officer', 'PT Sinarmas membuka kesempatan bagi lulusan baru untuk mengikuti program pengembangan manajemen di bidang audit internal.', 'flayer_bmdp_sinarmas.jpg', 'Full-time', 4000000, '2025-12-31', 'Aktif', '2025-10-16 15:09:14', '2025-10-16 15:09:14'),
(2, 1, 2, 'Web Developer Internship', 'Web Developer', 'PT Teknologi Nusantara membuka program magang untuk mahasiswa yang tertarik mengembangkan aplikasi web berbasis Laravel.', 'flayer_webdev.jpg', 'Full-time', 30000000000, '2025-11-30', 'Aktif', '2025-10-16 15:09:14', '2025-10-16 15:09:14'),
(3, 1, 3, 'UI/UX Designer', 'Designer', 'PT Kreatif Digital Indonesia membuka posisi UI/UX Designer untuk mengembangkan antarmuka aplikasi modern.', 'flayer_uiux.jpg', 'Full-time', 5000000, '2025-12-15', 'Aktif', '2025-10-16 15:09:14', '2025-10-16 15:09:14');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2025_10_16_204603_create_admin_table', 1),
(2, '2025_10_16_204701_create_perusahaan_table', 1),
(3, '2025_10_16_204801_create_lowongan_tablele', 1),
(4, '2025_10_17_214014_create_sessions_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `perusahaan`
--

CREATE TABLE `perusahaan` (
  `perusahaan_id` bigint UNSIGNED NOT NULL,
  `nama_perusahaan` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alamat` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_telp` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci,
  `website` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `perusahaan`
--

INSERT INTO `perusahaan` (`perusahaan_id`, `nama_perusahaan`, `alamat`, `email`, `no_telp`, `deskripsi`, `website`, `created_at`, `updated_at`) VALUES
(1, 'PT Sinarmas Multiartha Tbk', 'Jl. Jend. Sudirman No. 1, Jakarta Pusat', 'hrd@sinarmas.co.id', '0211234567', 'PT Sinarmas Multiartha Tbk adalah perusahaan nasional yang bergerak di bidang jasa keuangan, asuransi, dan investasi. Kami berkomitmen mengembangkan talenta muda Indonesia melalui program manajemen profesional berkelanjutan.', 'https://www.sinarmas.co.id', '2025-10-16 15:09:14', '2025-10-16 15:09:14'),
(2, 'PT Teknologi Nusantara', 'Jl. Soekarno Hatta No. 15, Malang', 'info@teknologinusantara.id', '0341123456', 'PT Teknologi Nusantara adalah startup teknologi yang fokus pada pengembangan sistem informasi, aplikasi berbasis web, dan solusi digital untuk bisnis dan pendidikan.', 'https://www.teknologinusantara.id', '2025-10-16 15:09:14', '2025-10-16 15:09:14'),
(3, 'PT Kreatif Digital Indonesia', 'Jl. Diponegoro No. 8, Bandung', 'career@kreatifdigital.co.id', '0229876543', 'PT Kreatif Digital Indonesia adalah perusahaan desain dan pengembangan aplikasi yang berfokus pada pembuatan pengalaman pengguna (UX) dan antarmuka yang menarik untuk web maupun mobile.', 'https://www.kreatifdigital.co.id', '2025-10-16 15:09:14', '2025-10-16 15:09:14');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('dnnePF79O0mRdhTBMCApYX9uzpJP4uvlgK5Pyp4U', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVnBBU2RzaE5MbW1vN3NJNUpBcEIybEZueThoZ25yNUdZMlR5VHEyUCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760737266),
('GKmpqh4mHqTX0OAYTO4ymueppaTvjPIHK739Erqh', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZW4xT1hyUHJkYXpWWEhsZXJGZTI2ZzFOVUJQNlNFN2hIV2w5NFZvZSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760751441),
('IvSCuXeZPqHmogcPtERZJOvfjna2lcVRQCSk9Na5', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidkpJZGpqaFBjbGpzelhOSlpNdGV5d0kwUzBTZ3RURFFuR2tLRjN4QyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9Vc2VyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1761981346),
('TeIQMomd4MbOrLns0tn2TWbT5IFyKfwwRONC2L1c', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTUhvRkZ0NzROVmNMUzFGU3Y1RjRBT095czk1VzZsaERLMFBzY3JHOSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9Vc2VyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1761981499),
('TGpG6rXCkfqVMGz16QoGmPXZKVwzAiNzQcKKwkOZ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZnM2WFZLQlBHdFg3eHBkT0VwTVZHekQ3WlZhM0V6VHVLVXl1aFpLNCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1761791485),
('THX1DcJuShYxAG40DRRuILIe3uTCpskY1jrwsvr9', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibDdZeUxZd2U5cnpFUXNFeWhHaWd1M2tFb1hUOFFkNDV4VkVUZUVNcyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1760937783);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `admin_email_admin_unique` (`email_admin`);

--
-- Indexes for table `lowongan`
--
ALTER TABLE `lowongan`
  ADD PRIMARY KEY (`lowongan_id`),
  ADD KEY `lowongan_admin_id_foreign` (`admin_id`),
  ADD KEY `lowongan_perusahaan_id_foreign` (`perusahaan_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `perusahaan`
--
ALTER TABLE `perusahaan`
  ADD PRIMARY KEY (`perusahaan_id`),
  ADD UNIQUE KEY `perusahaan_email_unique` (`email`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `lowongan`
--
ALTER TABLE `lowongan`
  MODIFY `lowongan_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `perusahaan`
--
ALTER TABLE `perusahaan`
  MODIFY `perusahaan_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lowongan`
--
ALTER TABLE `lowongan`
  ADD CONSTRAINT `lowongan_admin_id_foreign` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `lowongan_perusahaan_id_foreign` FOREIGN KEY (`perusahaan_id`) REFERENCES `perusahaan` (`perusahaan_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
