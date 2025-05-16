import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { FormsModule }             from '@angular/forms';
import { RouterModule }            from '@angular/router';
@Component({
  selector: 'app-login-workshop',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './login-workshop.component.html',
  styleUrl: './login-workshop.component.css'
})
export class LoginWorkshopComponent {

}
