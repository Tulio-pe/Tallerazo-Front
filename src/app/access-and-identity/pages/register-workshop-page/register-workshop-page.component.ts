import { Component } from '@angular/core';
import {LoginWorkshopFormComponent} from "../../components/login-workshop-form/login-workshop-form.component";
import {MatButton} from "@angular/material/button";
import {RegisterWorkshopFormComponent} from '../../components/register-workshop-form/register-workshop-form.component';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register-page',
  imports: [
    MatButton,
    RegisterWorkshopFormComponent,
    RouterLink
  ],
  templateUrl: './register-workshop-page.component.html',
  styleUrl: './register-workshop-page.component.css'
})
export class RegisterWorkshopPageComponent {

}
