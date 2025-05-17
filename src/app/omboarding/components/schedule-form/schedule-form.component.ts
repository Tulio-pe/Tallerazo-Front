import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ReactiveFormsModule,
  ValidationErrors
} from '@angular/forms';
import {MatFormField, MatInputModule, MatLabel} from '@angular/material/input';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  imports: [ReactiveFormsModule, MatLabel, MatFormField, MatLabel,MatInputModule ],
  styleUrls: ['./schedule-form.component.css'],
  standalone: true
})
export class ScheduleFormComponent {
  days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  private timeValidator = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const isValid = /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
    return isValid ? null : { invalidTime: true };
  };

  private startBeforeEndValidator = (group: AbstractControl): ValidationErrors | null => {
    const start = group.get('start')?.value;
    const end = group.get('end')?.value;

    if (!start || !end) return null;

    const [startH, startM] = start.split(':').map(Number);
    const [endH, endM] = end.split(':').map(Number);

    const startMinutes = startH * 60 + startM;
    const endMinutes = endH * 60 + endM;

    return startMinutes < endMinutes ? null : { startAfterEnd: true };
  };

  scheduleForm = new FormGroup(
    Object.fromEntries(
      this.days.map(day => [
        day,
        new FormGroup(
          {
            start: new FormControl('', [Validators.required, this.timeValidator]),
            end: new FormControl('', [Validators.required, this.timeValidator])
          },
          { validators: this.startBeforeEndValidator }
        )
      ])
    )
  );

  @Output() scheduleRegistered = new EventEmitter<{
    [key: string]: { [key: string]: string; start: string; end: string };
  }>();

  onScheduleRegistered() {
    if (!this.scheduleForm.valid) {
      this.scheduleForm.markAllAsTouched();
      return;
    }

    const result: {
      [key: string]: { [key: string]: string; start: string; end: string };
    } = {};

    this.days.forEach(day => {
      const group = this.scheduleForm.get(day) as FormGroup;
      result[day] = {
        [day.toLowerCase()]: day,
        start: group.get('start')?.value ?? '',
        end: group.get('end')?.value ?? ''
      };
    });

    this.scheduleRegistered.emit(result);
  }

  onCancel() {
    this.scheduleForm.reset();
  }
}
