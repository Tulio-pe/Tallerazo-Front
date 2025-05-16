import type { Routes } from "@angular/router"

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./tracking/tracking-form/tracking-form.component").then((m) => m.TrackingFormComponent),
  },
  {
    path: "vehicle-tracking/:code",
    loadComponent: () =>
      import("./tracking/vehicle-tracking/vehicle-tracking.component").then((m) => m.VehicleTrackingComponent),
  },
  {
    path: "**",
    redirectTo: "",
  },
]
