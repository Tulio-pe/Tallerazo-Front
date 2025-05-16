import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

export type Language = "es" | "en"

@Injectable({
  providedIn: "root",
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<Language>("es")
  public currentLanguage$ = this.currentLanguageSubject.asObservable()

  constructor() {
    // Intentar recuperar el idioma guardado en localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      this.setLanguage(savedLanguage)
    }
  }

  public setLanguage(language: Language): void {
    this.currentLanguageSubject.next(language)
    localStorage.setItem("language", language)
  }

  public getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value
  }

  public translate(key: string): string {
    const translations = {
      es: {
        "maintenance.tracking": "Seguimiento de reparación",
        // Añadir más traducciones según sea necesario
      },
      en: {
        "maintenance.tracking": "Maintenance Tracking",
        // Añadir más traducciones según sea necesario
      },
    }

    return translations[this.getCurrentLanguage()][key]
  }
}
