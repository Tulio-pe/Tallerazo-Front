import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../../model/vehicleEntity';
import {ItemAutoComponent} from '../../components/item-auto/item-auto.component';

import {TulioService} from '../../service/tulio.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  standalone: true,
  imports: [
    ItemAutoComponent,
    NgForOf,
    NgIf,

  ],
  styleUrls: ['./list-cars.component.css']

})
export class ListCarsComponent implements OnInit{
  vehicles: Vehicle[] = [];

  constructor(private tulioService: TulioService) {}

  ngOnInit(): void {
    this.tulioService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
    });
  }
}
