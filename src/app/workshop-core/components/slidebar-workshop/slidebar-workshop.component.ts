import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ItemAutoComponent } from '../item-auto/item-auto.component';
import { NgForOf, CommonModule } from '@angular/common';
import { Vehicle } from '../../model/vehicleEntity';
import { TulioService } from '../../service/tulio.service';

@Component({
  selector: 'app-slidebar-workshop',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatInputModule,
    MatSnackBarModule,
    ItemAutoComponent,
    NgForOf,
    CommonModule,
  ],
  templateUrl: './slidebar-workshop.component.html',
  styleUrl: './slidebar-workshop.component.css'
})
export class SlidebarWorkshopComponent {
  vehicles: Vehicle[] = [];
  constructor(private tulioService: TulioService) {}
  ngOnInit(): void {
    this.tulioService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }
}
