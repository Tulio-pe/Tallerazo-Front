import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import {  NgClass } from '@angular/common';

@Component({
  selector: 'app-dashboard-workshop',
  standalone: true,
  imports: [ReactiveFormsModule, MatSnackBarModule, MatButtonModule, NgClass],
  templateUrl: './dashboard-workshop.component.html',
  styleUrl: './dashboard-workshop.component.css',
})
export class DashboardComponent {
  estados = ['por_revisar', 'en_revision', 'revisado', 'entregado'];
  labels: { [key: string]: string } = {
    por_revisar: 'Por revisar',
    en_revision: 'En revisión',
    revisado: 'Revisado',
    entregado: 'Entregado'
  };

  estadoForm = new FormGroup({
    estado: new FormControl('por_revisar')
  });

  @Output() estadoSeleccionado = new EventEmitter<string>();

  constructor(private snackBar: MatSnackBar) {}

  seleccionarEstado(estado: string) {
    this.estadoForm.get('estado')?.setValue(estado);
    this.estadoSeleccionado.emit(estado);

    this.snackBar.open(`Estado actualizado a "${this.labels[estado]}"`, 'Cerrar', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  get estadoActual(): string {
    return this.estadoForm.get('estado')?.value || '';
  }
}
