import { Component } from '@angular/core';
import {WorkshopListComponent} from '../../components/workshop-list/workshop-list.component';
@Component({
  selector: 'app-workshop-catalogue-page',
  imports: [
    WorkshopListComponent,
  ],
  templateUrl: './workshop-catalogue-page.component.html',
  styleUrl: './workshop-catalogue-page.component.css'
})
export class WorkshopCataloguePageComponent {

}
