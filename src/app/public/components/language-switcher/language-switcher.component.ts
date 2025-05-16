import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../coretrack/services/translation.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent implements OnInit {
  currentLanguage: string = 'es';  // Idioma por defecto

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    // Obtener el idioma actual al iniciar
    this.currentLanguage = this.translationService.getCurrentLanguage();

    // Suscribirse a cambios de idioma
    this.translationService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }
}
