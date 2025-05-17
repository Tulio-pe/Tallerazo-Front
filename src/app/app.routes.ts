import type { Routes } from "@angular/router"

export const routes: Routes = [
  /*{
   path: "",
   loadComponent: () =>
     import("./tracking/components/tracking-form/tracking-form.component").then((m) => m.TrackingFormComponent),
 },*/
  {
    path: "login",
    loadComponent: () =>
      import("./auth/pages/login-page/login-page.component").then((m) => m.LoginPageComponent),
  },
  {
    path: "register",
    loadComponent: () =>
      import("./auth/pages/register-page/register-page.component").then((m) => m.RegisterPageComponent),
  },
  {
     path: "vehicle-tracking",
     loadComponent: () =>
       import("./tracking/components/tracking-form/tracking-form.component").then((m) => m.TrackingFormComponent),
   },
   {
     path: "vehicle-tracking/:code",
     loadComponent: () =>
       import("./tracking/components/vehicle-tracking/vehicle-tracking.component").then((m) => m.VehicleTrackingComponent),
   },
  {
    path: "workshop/cars",
    loadComponent: () =>
      import("./workshop-core/pages/list-cars/list-cars.component").then((m) => m.ListCarsComponent),
  },
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
