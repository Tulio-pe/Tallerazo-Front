import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Vehicle} from '../model/vehicleEntity';

@Injectable({
  providedIn: 'root'
})
export class TulioService {
  constructor() {}

  getVehicles(): Observable<Vehicle[]> {

    const fakeVehicles: Vehicle[] = [
      new Vehicle('ABC123', 'Toyota', 'Corolla', '2021'),
      new Vehicle('XYZ789', 'Kia', 'Rio', '2020'),
      new Vehicle('LMN456', 'Honda', 'Civic', '2019'),
      new Vehicle('PQR012', 'Ford', 'Fiesta', '2018'),
      new Vehicle('STU345', 'BMW', 'X5', '2017'),
      new Vehicle('VWX678', 'Nissan', '350Z', '2016'),
      new Vehicle('YZW901', 'Audi', 'A4', '2015'),

    ];


    fakeVehicles[0].Status = 'Por revisar';
    fakeVehicles[1].Status = 'En revisión';
    fakeVehicles[2].Status = 'Revisado';
    fakeVehicles[2].Status = 'Entregado';


    return of(fakeVehicles);
  }
}
