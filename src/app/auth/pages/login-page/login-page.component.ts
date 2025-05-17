import { Component } from '@angular/core';
import {LoginWorkshopComponent} from '../../components/login-workshop/login-workshop.component';
import {MatButton} from '@angular/material/button';
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-login-page',
  imports: [
    LoginWorkshopComponent,
    MatButton,
    RouterLink,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
