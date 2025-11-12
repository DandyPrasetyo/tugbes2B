import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="grid md:grid-cols-4 gap-8">
          
          <!-- KOLOM 1: POLITEKNIK & KONTAK -->
          <div class="space-y-6">
            <div>
              <h1 class="text-2xl font-bold text-white leading-tight">
                POLITEKNIK<br>
                <span class="text-blue-400">NEGERI MALANG</span>
              </h1>
            </div>

            <!-- Jam Kerja -->
            <div>
              <h3 class="font-bold text-white mb-2">JAM KERJA</h3>
              <p class="text-gray-300 text-sm">
                Senin - Jumat<br>
                07:00 - 16:00 WIB
              </p>
            </div>

            <!-- Kontak Kami -->
            <div>
              <h3 class="font-bold text-white mb-3">KONTAK KAMI</h3>
              <div class="space-y-2 text-sm text-gray-300">
                <div class="font-semibold">(0341) 404424</div>
                <div>
                  Jl. Soekarno Hatta No.9, Jatimulyo, Kec.<br>
                  Lowokwaru, Kota Malang, Jawa Timur 65141<br>
                  <span class="text-blue-400">admin&#64;polinema.ac.id</span>
                </div>
              </div>
            </div>
          </div>

          <!-- KOLOM 2: PSDKU LUMAJANG -->
          <div class="space-y-6">
            <div>
              <h3 class="font-bold text-white text-lg mb-4 border-b border-gray-600 pb-2">
                PSDKU KAB. LUMAJANG
              </h3>
              <div class="space-y-2 text-sm text-gray-300">
                <div>D-III Teknik Rekayasa Otomotif</div>
                <div>D-III Teknik Sipil</div>
                <div>D-III Akuntansi</div>
                <div>D-III Teknologi Informasi</div>
              </div>
            </div>
          </div>

          <!-- KOLOM 3: DESKRIPSI PSDKU -->
          <div class="space-y-6">
            <div>
              <h3 class="font-bold text-white text-lg mb-4 border-b border-gray-600 pb-2">
                Program Studi Di Luar Kampus Utama
              </h3>
              <p class="text-sm text-gray-300 leading-relaxed">
                (PSDKU) Lumajang adalah bagian dari Politeknik Negeri Malang yang memiliki 
                keberadaan di luar kampus utama untuk memberikan pendidikan vokasi berkualitas 
                di daerah Lumajang, Jawa Timur, Indonesia.
              </p>
            </div>
          </div>

          <!-- KOLOM 4: PETA -->
          <div class="space-y-4">
            <h3 class="font-bold text-white text-lg border-b border-gray-600 pb-2">
              LOKASI KAMI
            </h3>
            <div class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.314182207899!2d112.6152773153552!3d-7.946446881488732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78827687d27247%3A0x8b64b6ef5f6e4b1c!2sPoliteknik%20Negeri%20Malang!5e0!3m2!1sen!2sid!4v1640000000000!5m2!1sen!2sid" 
                width="100%" 
                height="200" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-48">
              </iframe>
            </div>
            <p class="text-xs text-gray-400 text-center">
              Klik peta untuk melihat detail lokasi
            </p>
          </div>

        </div>

        <!-- Garis Pemisah -->
        <div class="border-t border-gray-700 my-6"></div>

        <!-- Copyright -->
        <div class="text-center">
          <p class="text-gray-400 text-sm">
            Copyright © {{ currentYear }} Politeknik Negeri Malang
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}