import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-gray-900 text-white no-print">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="space-y-6">
            <h1 class="text-2xl font-bold">
              POLITEKNIK<br />
              <span class="text-blue-400">NEGERI MALANG</span>
            </h1>

            <div>
              <h3 class="font-bold mb-2">JAM KERJA</h3>
              <p class="text-sm text-gray-300">
                Senin - Jumat<br />07:00 - 16:00 WIB
              </p>
            </div>

            <div>
              <h3 class="font-bold mb-2">KONTAK KAMI</h3>
              <p class="text-sm text-gray-300">
                (0341) 404424<br />
                admin&#64;polinema.ac.id
              </p>
            </div>
          </div>

          <div>
            <h3 class="font-bold border-b pb-2 mb-3">PSDKU LUMAJANG</h3>
            <p class="text-sm text-gray-300">
              D-III Teknik Sipil<br />
              D-III Akuntansi<br />
              D-III Teknologi Informasi
            </p>
          </div>

          <div>
            <h3 class="font-bold border-b pb-2 mb-3">
              Program Studi Di Luar Kampus Utama
            </h3>
            <p class="text-sm text-gray-300">
              PSDKU Lumajang adalah bagian dari Politeknik Negeri Malang.
            </p>
          </div>

          <div>
            <h3 class="font-bold border-b pb-2 mb-3">LOKASI</h3>
            <iframe
              class="w-full h-48 rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.314182207899!2d112.6152773153552!3d-7.946446881488732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78827687d27247%3A0x8b64b6ef5f6e4b1c!2sPoliteknik%20Negeri%20Malang!5e0!3m2!1sen!2sid!4v1640000000000!5m2!1sen!2sid"
            >
            </iframe>
          </div>
        </div>

        <div class="border-t border-gray-700 my-6"></div>

        <p class="text-center text-sm text-gray-400">
          Copyright © {{ currentYear }} Politeknik Negeri Malang
        </p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
