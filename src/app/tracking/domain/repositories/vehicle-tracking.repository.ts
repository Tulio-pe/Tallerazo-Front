import { Injectable } from "@angular/core"
import { type Observable, of } from "rxjs"
import { delay } from "rxjs/operators"
import type { VehicleTracking } from "../models/vehicle-tracking.model"

@Injectable({
  providedIn: "root",
})
export class VehicleTrackingRepository {
  // Simulación de datos - en un caso real, esto se conectaría a un API
  getVehicleTrackingByCode(code: string): Observable<VehicleTracking> {
    // Simulamos una llamada a API con un delay
    return of({
      trackingNumber: code,
      vehicleInfo: {
        plateNumber: "ABC123",
        model: "Lorem ipsum",
        make: "Lorem ipsum",
        year: "Lorem ipsum",
      },
      repairInfo: {
        type: "Lorem ipsum",
        startDate: "Lorem ipsum",
        notes:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat tristique nisi, vitae finibus massa auctor eget. Pellentesque bibendum pretium lorem.",
      },
      repairStates: [
        {
          id: 1,
          title: "Estado 1",
          description: "Lorem ipsum dolor sit amet, consectetur",
          imageUrl: "/assets/images/state1.png",
          completed: true,
        },
        {
          id: 2,
          title: "Estado 2",
          description: "Lorem ipsum dolor sit amet, consectetur",
          imageUrl: "/assets/images/state2.png",
          completed: true,
        },
        {
          id: 3,
          title: "Estado 3",
          description: "Lorem ipsum dolor sit amet, consectetur",
          imageUrl: "/assets/images/state3.png",
          completed: false,
        },
      ],
    }).pipe(delay(1000)) // Simulamos 1 segundo de delay
  }
}
