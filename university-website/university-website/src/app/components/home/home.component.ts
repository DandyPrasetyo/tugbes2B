import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-[#24395e]">

      <!-- Hero Section dengan Background Image Kampus Utama -->
      <section class="relative bg-[#24395e] text-white min-h-[600px] flex items-center">

        <!-- BACKGROUND FOTO KAMPUS UTAMA/LUAS -->
        <div class="absolute inset-0">
          <img 
            src="assets/img/kampus4.jpg" 
            alt="Kampus Polinema PSDKU Lumajang - View Lengkap"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Overlay -->
       <div class="absolute inset-0 bg-[#24455E] bg-opacity-45"></div>



        
        <!-- Content -->
        <div class="relative max-w-4xl mx-auto px-4 py-16 text-left">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#e6f0f6]">
  SELAMAT DATANG DI<br>
            <span class="text-yellow-300">POLITEKNIK NEGERI MALANG PSDKU</span><br>
            LUMAJANG
          </h1>
          
          <p class="text-lg md:text-xl mb-4 leading-relaxed max-w-2xl">
            Bersama kami kamu akan tumbuh menjadi pribadi mandiri, terampil,<br>
            dan siap menghadapi tantangan dunia kerja.
          </p>
          <p class="text-lg mb-8">
            Ayo gabung dan jadikan mimpimu kenyataan!
          </p>
          
          <div class="text-left">
            <button class="bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-300 transition-colors">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </section>

      <!-- FASILITAS KAMPUS -->
      <section class="bg-gray-100 py-8 border-b border-gray-300">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">
            FASILITAS KAMPUS
          </h2>
          
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <!-- Gedung A -->
            <div class="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <img src="assets/img/kampus3.jpg" alt="Gedung A" class="w-full h-24 object-cover rounded-md mb-2" />

              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span class="text-blue-600 font-bold">A</span>
              </div>
              <div class="text-sm font-semibold text-gray-700">Gedung A</div>
            </div>

            <!-- Lab Komputer -->
            <div class="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <img src="assets/img/lab.jpg" alt="Gedung A" class="w-full h-24 object-cover rounded-md mb-2" />
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span class="text-green-600 font-bold">L</span>
              </div>
              <div class="text-sm font-semibold text-gray-700">Lab Komputer</div>
            </div>

            <!-- Perpustakaan -->
            <div class="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span class="text-purple-600 font-bold">P</span>
              </div>
              <div class="text-sm font-semibold text-gray-700">Perpustakaan</div>
            </div>

            <!-- Kantin -->
            <div class="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span class="text-red-600 font-bold">K</span>
              </div>
              <div class="text-sm font-semibold text-gray-700">Kantin</div>
            </div>

            <!-- Lapangan -->
            <div class="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span class="text-yellow-600 font-bold">V</span>
              </div>
              <div class="text-sm font-semibold text-gray-700">Lapangan</div>
            </div>

            <!-- Auditorium -->
            <div class="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span class="text-indigo-600 font-bold">A</span>
              </div>
              <div class="text-sm font-semibold text-gray-700">Auditorium</div>
            </div>
          </div>
        </div>
      </section>

      <!-- GALLERY FOTO KAMPUS -->
      <section class="bg-white py-8">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">
            GALLERY KAMPUS
          </h2>
          
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <!-- Foto 1 - View Kampus -->
            <div class="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <img 
                src="assets/images/kampus-view-1.jpg" 
                alt="View Kampus Polinema Lumajang"
                class="w-full h-24 object-cover hover:scale-105 transition-transform"
              />
            </div>

            <!-- Foto 2 - Area Hijau -->
            <div class="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <img 
                src="assets/images/kampus-view-2.jpg" 
                alt="Area Hijau Kampus"
                class="w-full h-24 object-cover hover:scale-105 transition-transform"
              />
            </div>

            <!-- Foto 3 - Gedung Utama -->
            <div class="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <img 
                src="assets/images/kampus-view-3.jpg" 
                alt="Gedung Utama Kampus"
                class="w-full h-24 object-cover hover:scale-105 transition-transform"
              />
            </div>

            <!-- Foto 4 - Taman Kampus -->
            <div class="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <img 
                src="assets/images/kampus-view-4.jpg" 
                alt="Taman Kampus"
                class="w-full h-24 object-cover hover:scale-105 transition-transform"
              />
            </div>

            <!-- Foto 5 - Koridor -->
            <div class="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <img 
                src="assets/images/kampus-view-5.jpg" 
                alt="Koridor Kampus"
                class="w-full h-24 object-cover hover:scale-105 transition-transform"
              />
            </div>

            <!-- Foto 6 - Entrance -->
            <div class="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <img 
                src="assets/images/kampus-view-6.jpg" 
                alt="Entrance Kampus"
                class="w-full h-24 object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Berita Utama -->
      <section class="py-12 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-2xl font-bold mb-8 text-gray-800 border-b-2 border-gray-300 pb-2">
            BERITA UTAMA
          </h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            <!-- Berita 1 -->
            <div class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <img 
                src="assets/images/berita-kampus-1.jpg" 
                alt="Kegiatan Kampus"
                class="w-full h-40 object-cover rounded mb-4"
              />
              <h3 class="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                Politeknik Negeri Malang dan Universitas Negeri Surabaya Tandatangani Nota Kesepahaman
              </h3>
            </div>

            <!-- Berita 2 -->
            <div class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <img 
                src="assets/images/berita-kampus-2.jpg" 
                alt="Kerjasama Industri"
                class="w-full h-40 object-cover rounded mb-4"
              />
              <h3 class="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                Politeknik Negeri Malang dan Industri Tandatangani Kerjasama Magang Mahasiswa
              </h3>
            </div>

            <!-- Berita 3 -->
            <div class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <img 
                src="assets/images/berita-kampus-3.jpg" 
                alt="Acara Kampus"
                class="w-full h-40 object-cover rounded mb-4"
              />
              <h3 class="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                Polinema Sukses Gelar Closing Ceremony dan Awarding NTVSC 2025
              </h3>
            </div>
          </div>
        </div>
      </section>

      <!-- Polinema Dalam Angka -->
      <section class="py-12 bg-white">
        <div class="max-w-4xl mx-auto px-4">
          <h2 class="text-xl font-bold mb-6 text-gray-800 text-center">
            Polinema Dalam Angka
          </h2>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <!-- Program Studi -->
            <div class="rounded-lg p-6 border-2" style="border-color: #191970; background-color: #f8f9ff;">
              <div class="text-3xl font-bold" style="color: #191970;">4</div>
              <div class="text-sm text-gray-600 mt-2">PROGRAM STUDI</div>
            </div>
            
            <!-- Mahasiswa Baru -->
            <div class="rounded-lg p-6 border-2" style="border-color: #191970; background-color: #f8f9ff;">
              <div class="text-3xl font-bold" style="color: #191970;">200+</div>
              <div class="text-sm text-gray-600 mt-2">MAHASISWA BARU</div>
            </div>
            
            <!-- Dosen -->
            <div class="rounded-lg p-6 border-2" style="border-color: #191970; background-color: #f8f9ff;">
              <div class="text-3xl font-bold" style="color: #191970;">49</div>
              <div class="text-sm text-gray-600 mt-2">DOSEN</div>
            </div>
            
            <!-- Juara PIMNAS -->
            <div class="rounded-lg p-6 border-2" style="border-color: #191970; background-color: #f8f9ff;">
              <div class="text-3xl font-bold" style="color: #191970;">2</div>
              <div class="text-sm text-gray-600 mt-2">JUARA PIMNAS</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent {
  // Fungsi untuk navigasi (jika diperlukan)
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}