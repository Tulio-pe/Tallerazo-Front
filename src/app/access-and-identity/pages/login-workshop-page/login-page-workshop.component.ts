import { Component } from '@angular/core';
import {LoginWorkshopFormComponent} from '../../components/login-workshop-form/login-workshop-form.component';
import {MatButton} from '@angular/material/button';
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-login-page',
  imports: [
    LoginWorkshopFormComponent,
    MatButton,
    RouterLink,
  ],
  templateUrl: './login-page-workshop.component.html',
  styleUrl: './login-page-workshop.component.css'
})
export class LoginPageWorkshopComponent {

}
