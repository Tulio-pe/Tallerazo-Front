import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule }            from '@angular/common';
import { FormsModule }             from '@angular/forms';
import { RouterLink }            from '@angular/router';

@Component({
  selector: 'app-login-workshop',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './login-workshop-form.component.html',
  styleUrl: './login-workshop-form.component.css'
})
export class LoginWorkshopFormComponent {

}
