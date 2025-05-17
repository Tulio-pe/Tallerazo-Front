import {WorkshopItemComponent, Workshop} from "../workshop-item/workshop-item.component";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-workshop-list',
    imports: [
        WorkshopItemComponent,
      CommonModule,
    ],
  templateUrl: './workshop-list.component.html',
  styleUrl: './workshop-list.component.css'
})
export class WorkshopListComponent {
  constructor(private router: Router) {}

  workshops: Workshop[] = [
    //  Ejemplo de datos
    {
      id: '1',
      name: 'Nombre de la empresa',
      address: 'Av. Siempre Viva 123',
      telephone: '(01) 123-4567',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat...',
    },
    {
      id: '2',
      name: 'Nombre de la empresa',
      address: 'Av. Siempre Viva 123',
      telephone: '(01) 123-4567',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat...',
    },
    {
      id: '3',
      name: 'Nombre de la empresa',
      address: 'Av. Siempre Viva 123',
      telephone: '(01) 123-4567',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat...',
    },
    {
      id: '4',
      name: 'Nombre de la empresa',
      address: 'Av. Siempre Viva 123',
      telephone: '(01) 123-4567',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat...',
    },
    {
      id: '5',
      name: 'Nombre de la empresa',
      address: 'Av. Siempre Viva 123',
      telephone: '(01) 123-4567',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat...',
    },
    {
      id: '6',
      name: 'Nombre de la empresa',
      address: 'Av. Siempre Viva 123',
      telephone: '(01) 123-4567',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat...',
    },

  ];
  goToDetail(id: string) {
    this.router.navigate(['/workshop', id]);
  }

}
