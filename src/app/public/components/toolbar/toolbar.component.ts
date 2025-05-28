import { Component, type OnInit } from "@angular/core"
import  { Router } from "@angular/router"
import  { TranslationService } from "../../../car-tracking/services/translation.service"
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"],
  imports: [
    LanguageSwitcherComponent
  ]
})
export class ToolbarComponent implements OnInit {
  constructor(
    private router: Router,
    private translationService: TranslationService,
  ) {}

  ngOnInit(): void {
    // Inicialización si es necesaria
  }

  navigateToVehicleForm(): void {
    this.router.navigate(["/vehicle-form"])
  }

  translate(key: string): string {
    return this.translationService.translate(key)
  }
}
