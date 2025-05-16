import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vehicle } from '../../tulio/model/model/vehicleEntity';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-item-auto',
  standalone: true,
  imports: [
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatCardActions
  ],
  templateUrl: './item-auto.component.html',
  styleUrls: ['./item-auto.component.css']
})
export class ItemAutoComponent {
  @Input() vehicle!: Vehicle;
  @Output() toggleEstado = new EventEmitter<Vehicle>();
  @Input() mostrarBoton: boolean = true;
  cambiarEstado(): void {
    const estados = ['Por revisar', 'En revisión', 'Revisado', 'Entregado'];
    const i = estados.indexOf(this.vehicle.Status);
    const siguiente = (i + 1) % estados.length;
    this.vehicle.Status = estados[siguiente];

    this.toggleEstado.emit(this.vehicle);
  }
}
