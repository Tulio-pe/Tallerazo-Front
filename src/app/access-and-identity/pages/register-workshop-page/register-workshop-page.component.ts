import { Component } from '@angular/core';
import {LoginWorkshopComponent} from "../../components/login-workshop/login-workshop.component";
import {MatButton} from "@angular/material/button";
import {RegisterWorkshopComponent} from '../../components/register-workshop/register-workshop.component';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register-page',
  imports: [
    MatButton,
    RegisterWorkshopComponent,
    RouterLink
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

}
