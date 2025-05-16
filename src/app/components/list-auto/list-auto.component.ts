import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../../tulio/model/model/vehicleEntity';
import {ItemAutoComponent} from '../item-auto/item-auto.component';

import {TulioService} from '../../tulio/service/tulio.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-list-auto',
  templateUrl: './list-auto.component.html',
  standalone: true,
  imports: [
    ItemAutoComponent,
    NgForOf,
    NgIf,

  ],
  styleUrls: ['./list-auto.component.css']

})
export class ListAutoComponent implements OnInit{
  vehicles: Vehicle[] = [];

  constructor(private tulioService: TulioService) {}

  ngOnInit(): void {
    this.tulioService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
    });
  }
}
