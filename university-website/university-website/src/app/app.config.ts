import { ApplicationConfig, importProvidersFrom, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

import { routes } from './app.routes';

import { provideHttpClient, HttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

// 👉 TRANSLATE
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

/* =========================
   TRANSLATE LOADER (FIX SSR)
========================= */
class SimpleTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<Record<string, any>> {
    const platformId = inject(PLATFORM_ID);

    // ✅ HANYA LOAD JSON DI BROWSER
    if (isPlatformBrowser(platformId)) {
      return this.http.get<Record<string, any>>(
        '/assets/i18n/' + lang + '.json'
      );
    }

    // ⛔ SSR: jangan load apa-apa
    return of({});
  }
}

/* =========================
   FACTORY
========================= */
export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new SimpleTranslateLoader(http);
}

/* =========================
   APP CONFIG
========================= */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideClientHydration(),

    // HttpClient + fetch (aman)
    provideHttpClient(withFetch()),

    // 👉 TRANSLATE PROVIDER
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
        fallbackLang: 'id',
      })
    ),
  ],
};
