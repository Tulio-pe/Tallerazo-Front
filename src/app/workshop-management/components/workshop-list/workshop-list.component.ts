import {WorkshopCardComponent} from "../workshop-card/workshop-card.component";
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {WorkshopInfo} from '../../model/workshop-info';
import {WorkshopInfoService} from '../../services/workshop-info.service';
@Component({
  selector: 'app-workshop-list',
    imports: [
        WorkshopCardComponent,
      CommonModule,
    ],
  templateUrl: './workshop-list.component.html',
  styleUrl: './workshop-list.component.css'
})
export class WorkshopListComponent implements OnInit {

  workshops: WorkshopInfo[] = [];

  constructor(
    private router: Router,
    private workshopSvc: WorkshopInfoService   // ← inyección
  ) {}

  ngOnInit(): void {
    this.workshopSvc.getAllWorkshopsInfo().subscribe(infos => {
      // Mapeamos el DTO de dominio a la interfaz que usa la lista
      this.workshops = infos
      console.log(infos[0])
    });
  }

  goToDetail(id: string) {
    this.router.navigate(['/workshop', id]);
  }

}
