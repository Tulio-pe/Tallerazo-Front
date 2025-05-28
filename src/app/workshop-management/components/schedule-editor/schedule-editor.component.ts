import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, ValidationErrors, AbstractControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIcon} from '@angular/material/icon';
@Component({
  selector: 'app-atencion',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSnackBarModule,  MatIcon],
  templateUrl: './schedule-editor.component.html',
  styleUrl: './schedule-editor.component.css'
})
export class ScheduleEditorComponent {
  days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  atentionform = new FormGroup(
    this.days.reduce((group, day) => {
      group[day] = new FormGroup({
        start: new FormControl('', Validators.required),
        end: new FormControl('', Validators.required)
      }, { validators: this.validarRango });
      return group;
    }, {} as { [key: string]: FormGroup })
  );
  @Output() Registeredschedule = new EventEmitter<{ [key: string]: { Day:string,start: string, end: string } }>();
  constructor(private snackBar: MatSnackBar) {}
  onRegisteredschedule() {
    if (this.atentionform.valid) {
      const horarios = this.days.reduce((acc, day) => {
        const { start, end } = this.atentionform.get(day)?.value;
        acc[day] = { Day: day, start, end };
        return acc;
      }, {} as { [key: string]: { Day: string, start: string, end: string } });

      this.Registeredschedule.emit(horarios);
      this.snackBar.open('Horarios guardados correctamente ', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  }
  private validarRango(control: AbstractControl): ValidationErrors | null {
    const start = control.get('start')?.value;
    const end = control.get('end')?.value;
    if (!start || !end) return null;
    const [sh, sm] = start.split(':').map(Number);
    const [eh, em] = end.split(':').map(Number);
    return (eh < sh || (eh === sh && em <= sm)) ? { rangoInvalido: true } : null;
  }
}
