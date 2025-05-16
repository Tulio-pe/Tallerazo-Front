// En tu language-switcher.component.ts
import { Component } from '@angular/core';
import  { TranslationService } from "../../../coretrack/services/translation.service"

@Component({
  selector: 'app-language-switcher',
  template: `
    <div class="language-buttons">
      <button (click)="switchLanguage('es')" [class.active]="currentLang === 'es'">ES</button>
      <button (click)="switchLanguage('en')" [class.active]="currentLang === 'en'">EN</button>
    </div>
  `,
  styles: [`
    .language-buttons button {
      padding: 5px 10px;
      margin: 0 2px;
    }
    .active {
      font-weight: bold;
    }
  `]
})
export class LanguageSwitcherComponent {
  currentLang: string;

  constructor(private translationService: TranslationService) {
    this.currentLang = this.translationService.getCurrentLanguage();

    // Subscribirse a cambios de idioma
    this.translationService.currentLanguage$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  switchLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }
}
