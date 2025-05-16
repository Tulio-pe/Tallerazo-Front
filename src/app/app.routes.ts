import { Routes } from '@angular/router';
import { RepairTrackingComponent } from './dashboard.user/features/repair-tracking.component';
import { EmpresaDetailComponent } from './dashboard.user/features/empresa-detail.component';

export const routes: Routes = [
  { path: 'seguimiento-reparacion', component: RepairTrackingComponent },
  { path: 'seguimiento-reparacion/empresa/:id', component: EmpresaDetailComponent }
];
