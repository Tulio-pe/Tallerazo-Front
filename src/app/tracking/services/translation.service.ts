// Solo modifica tu servicio de traducción existente para tener estos métodos
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  // Objeto para almacenar traducciones
  private translations: { [lang: string]: { [key: string]: string } } = {};

  // Idioma actual
  private currentLanguage = new BehaviorSubject<string>('es');
  currentLanguage$ = this.currentLanguage.asObservable();

  constructor(private http: HttpClient) {
    // Cargar idiomas al inicio
    this.loadLanguage('es');
    this.loadLanguage('en');
  }

  // Cargar un idioma
  loadLanguage(lang: string): void {
    this.http.get<any>(`assets/i18n/${lang}.json`).subscribe(data => {
      this.translations[lang] = data;

      // Si es el idioma actual, notificar cambio
      if (lang === this.getCurrentLanguage()) {
        this.currentLanguage.next(lang);
      }
    });
  }

  // Obtener el idioma actual
  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }

  // Cambiar idioma
  changeLanguage(lang: string): void {
    if (this.translations[lang]) {
      this.currentLanguage.next(lang);
      localStorage.setItem('language', lang);
    } else {
      this.loadLanguage(lang);
      this.currentLanguage.next(lang);
    }
  }

  // Traducir una clave
  translate(key: string): string {
    const lang = this.getCurrentLanguage();
    if (this.translations[lang] && this.translations[lang][key]) {
      return this.translations[lang][key];
    }
    return key;
  }
}
