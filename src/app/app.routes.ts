import type { Routes } from "@angular/router"

export const routes: Routes = [
  {
   path: "",
   loadComponent: () =>
     import("./workshop-management/pages/workshop-catalogue-page/workshop-catalogue-page.component").then((m) => m.WorkshopCataloguePageComponent),
 },
  {
    path: "login",
    loadComponent: () =>
      import("./access-and-identity/pages/login-workshop-page/login-page-workshop.component").then((m) => m.LoginPageWorkshopComponent),
  },
  {
    path: "register",
    loadComponent: () =>
      import("./access-and-identity/pages/register-workshop-page/register-workshop-page.component").then((m) => m.RegisterWorkshopPageComponent),
  },
  {
     path: "car-tracking",
     loadComponent: () =>
       import("./car-tracking/components/tracking-form/tracking-form.component").then((m) => m.TrackingFormComponent),
   },
   {
     path: "car-tracking/:code",
     loadComponent: () =>
       import("./car-tracking/components/details-repairment/details-repairment.component").then((m) => m.DetailsRepairmentComponent),
   },
  {
    path: "workshop/cars",
    loadComponent: () =>
      import("./repair-management/pages/list-cars/list-cars.component").then((m) => m.ListCarsComponent),
  },
  {
    path: "workshop/dashboard",
    loadComponent: () =>
      import("./repair-management/pages/dashboard-workshop/dashboard-workshop.component").then((m) => m.DashboardComponent),
  },
  {
    path: "**",
    redirectTo: "",
  },
]
