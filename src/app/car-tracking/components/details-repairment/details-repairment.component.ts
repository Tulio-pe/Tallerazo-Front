import { Component, type OnInit } from "@angular/core"
import  { ActivatedRoute, Router } from "@angular/router"
import { CommonModule } from "@angular/common"
import  { VehicleTrackingService } from "../../services/vehicle-tracking.service"
import type { VehicleTracking } from "../../domain/models/vehicle-tracking.model"

@Component({
  selector: "app-details-repairment",
  templateUrl: "./details-repairment.component.html",
  styleUrls: ["./details-repairment.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class DetailsRepairmentComponent implements OnInit {
  trackingCode = ""
  vehicleData: VehicleTracking | null = null
  isLoading = true
  error = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleTrackingService: VehicleTrackingService,
  ) {}

  ngOnInit(): void {
    this.trackingCode = this.route.snapshot.paramMap.get("code") || ""

    if (!this.trackingCode) {
      this.router.navigate(["/"])
      return
    }

    this.loadVehicleData()
  }

  loadVehicleData(): void {
    this.isLoading = true
    this.error = false

    this.vehicleTrackingService.getVehicleTrackingByCode(this.trackingCode).subscribe({
      next: (data) => {
        this.vehicleData = data
        this.isLoading = false
      },
      error: (err) => {
        console.error("Error fetching vehicle data", err)
        this.error = true
        this.isLoading = false
      },
    })
  }

  newSearch(): void {
    this.router.navigate(["/vehicle-tracking"])
  }
}
