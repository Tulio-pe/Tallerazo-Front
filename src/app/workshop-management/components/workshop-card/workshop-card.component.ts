import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {WorkshopInfo} from '../../model/workshop-info';

@Component({
  selector: 'app-workshop-item',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './workshop-item.component.html',
  styleUrl: './workshop-item.component.css'
})
export class WorkshopItemComponent {
  @Input() workshop!: WorkshopInfo;
  @Output() view = new EventEmitter<string>();
}
