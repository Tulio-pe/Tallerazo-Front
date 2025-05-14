import { Injectable } from "@angular/core"
import type { Observable } from "rxjs"
import type { VehicleTracking } from "../domain/models/vehicle-tracking.model"
import type { VehicleTrackingRepository } from "../domain/repositories/vehicle-tracking.repository"

@Injectable({
  providedIn: "root",
})
export class VehicleTrackingService {
  constructor(private vehicleTrackingRepository: VehicleTrackingRepository) {}

  getVehicleTrackingByCode(code: string): Observable<VehicleTracking> {
    return this.vehicleTrackingRepository.getVehicleTrackingByCode(code)
  }
}
