import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {RouterLink} from "@angular/router";
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-register-workshop',
    imports: [
        FormsModule,
        MatButton,
        MatFormField,
        MatIcon,
        MatInput,
        MatLabel,
        RouterLink
    ],
  templateUrl: './register-workshop.component.html',
  styleUrl: './register-workshop.component.css'
})
export class RegisterWorkshopComponent {

}
