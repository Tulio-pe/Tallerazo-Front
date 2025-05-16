import { Injectable } from "@angular/core"
import type { Router } from "@angular/router"

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  constructor(private router: Router) {}

  public navigateToVehicleForm(): void {
    this.router.navigate(["/vehicle-form"])
  }
}
