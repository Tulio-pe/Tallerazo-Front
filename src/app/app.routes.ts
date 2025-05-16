import type { Routes } from "@angular/router"

export const routes: Routes = [

  /*{
    path: "taller",
    loadComponent: () =>
      import("./workshop-core/components/dashboard/dashboard.component").then((m) => m.DashboardComponent),
  },

  {
    path: "",
    loadComponent: () =>
      import("./tracking/components/tracking-form/tracking-form.component").then((m) => m.TrackingFormComponent),
  },
  {
    path: "vehicle-tracking/:code",
    loadComponent: () =>
      import("./tracking/components/vehicle-tracking/vehicle-tracking.component").then((m) => m.VehicleTrackingComponent),
  },*/


  {
    path: "workshop/dashboard",
    loadComponent: () =>
      import("./workshop-core/pages/dashboard-workshop/dashboard-workshop.component").then((m) => m.DashboardComponent),
  },
  {
    path: "**",
    redirectTo: "",
  },

]
