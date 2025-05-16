import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ItemAutoComponent } from '../item-auto/item-auto.component';
import { NgForOf, CommonModule } from '@angular/common';
import { Vehicle } from '../../tulio/model/model/vehicleEntity';
import { TulioService } from '../../tulio/service/tulio.service';
@Component({
  selector: 'app-view-car',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ItemAutoComponent,
    NgForOf
  ],
  templateUrl: './view-car.component.html',
  styleUrl: './view-car.component.css'
})
export class ViewCarComponent implements OnInit {
  vehicles: Vehicle[] = [];
  constructor(private tulioService: TulioService) {}
  ngOnInit(): void {
    this.tulioService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }
}
