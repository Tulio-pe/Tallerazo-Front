// Componente principal para el seguimiento de reparación en el contexto de dashboard.user
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { EmpresaDetailComponent } from './empresa-detail.component';

interface Company {
  id: number;
  name: string;
  address: string;
  phone: string;
  description: string;
}

@Component({
  selector: 'app-repair-tracking',
  templateUrl: './repair-tracking.component.html',
  styleUrls: ['./repair-tracking.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, RouterModule, EmpresaDetailComponent]
})
export class RepairTrackingComponent {
  region = '';
  province = '';
  district = '';
  city = '';
  language = 'ES';
  companies: Company[] = [
    { id: 1, name: 'Empresa 1', address: 'Dirección 1', phone: '123456', description: 'Descripción de la empresa 1.' },
    { id: 2, name: 'Empresa 2', address: 'Dirección 2', phone: '654321', description: 'Descripción de la empresa 2.' },
    { id: 3, name: 'Empresa 3', address: 'Dirección 3', phone: '111222', description: 'Descripción de la empresa 3.' },
    { id: 4, name: 'Empresa 4', address: 'Dirección 4', phone: '333444', description: 'Descripción de la empresa 4.' },
    { id: 5, name: 'Empresa 5', address: 'Dirección 5', phone: '555666', description: 'Descripción de la empresa 5.' },
    { id: 6, name: 'Empresa 6', address: 'Dirección 6', phone: '777888', description: 'Descripción de la empresa 6.' },
    { id: 7, name: 'Empresa 7', address: 'Dirección 7', phone: '999000', description: 'Descripción de la empresa 7.' },
    { id: 8, name: 'Empresa 8', address: 'Dirección 8', phone: '121314', description: 'Descripción de la empresa 8.' }
  ];
  filteredCompanies = this.companies;
  translate = inject(TranslateService);
  router = inject(Router);

  constructor() {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
    this.translate.use('es'); // Fuerza español al iniciar
    this.language = 'ES';
  }

  setLanguage(lang: string) {
    this.language = lang;
    this.translate.use(lang.toLowerCase());
  }

  onFilterChange() {
    // Aquí puedes agregar lógica de filtrado real
    this.filteredCompanies = this.companies.filter(c =>
      (!this.region || c.address.includes(this.region)) &&
      (!this.province || c.address.includes(this.province)) &&
      (!this.district || c.address.includes(this.district)) &&
      (!this.city || c.address.includes(this.city))
    );
  }

  onSearch() {
    this.onFilterChange();
  }

  onViewMore(company: Company) {
    this.router.navigate(['/seguimiento-reparacion/empresa', company.id]);
  }
}
