import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { RepairTrackingComponent } from './features/repair-tracking.component';

const routes: Routes = [
  { path: 'seguimiento-reparacion', component: RepairTrackingComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(routes),
    RepairTrackingComponent // Importar como standalone
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }