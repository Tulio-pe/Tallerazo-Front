import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Company {
  id: number;
  name: string;
  address: string;
  phone: string;
  description: string;
  email?: string;
  services?: string[];
}

@Component({
  selector: 'app-empresa-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './empresa-detail.component.html',
  styleUrls: ['./empresa-detail.component.css']
})
export class EmpresaDetailComponent {
  empresa: Company | undefined;
  language = 'ES';
  translate = inject(TranslateService);
  companies: Company[] = [
    { id: 1, name: 'Empresa 1', address: 'Dirección 1', phone: '123456', description: 'Descripción de la empresa 1.', email: 'empresa1@email.com', services: ['Servicio A', 'Servicio B'] },
    { id: 2, name: 'Empresa 2', address: 'Dirección 2', phone: '654321', description: 'Descripción de la empresa 2.', email: 'empresa2@email.com', services: ['Servicio C', 'Servicio D'] },
    { id: 3, name: 'Empresa 3', address: 'Dirección 3', phone: '111222', description: 'Descripción de la empresa 3.', email: 'empresa3@email.com', services: ['Servicio E', 'Servicio F'] },
    { id: 4, name: 'Empresa 4', address: 'Dirección 4', phone: '333444', description: 'Descripción de la empresa 4.', email: 'empresa4@email.com', services: ['Servicio G', 'Servicio H'] },
    { id: 5, name: 'Empresa 5', address: 'Dirección 5', phone: '555666', description: 'Descripción de la empresa 5.', email: 'empresa5@email.com', services: ['Servicio I', 'Servicio J'] },
    { id: 6, name: 'Empresa 6', address: 'Dirección 6', phone: '777888', description: 'Descripción de la empresa 6.', email: 'empresa6@email.com', services: ['Servicio K', 'Servicio L'] },
    { id: 7, name: 'Empresa 7', address: 'Dirección 7', phone: '999000', description: 'Descripción de la empresa 7.', email: 'empresa7@email.com', services: ['Servicio M', 'Servicio N'] },
    { id: 8, name: 'Empresa 8', address: 'Dirección 8', phone: '121314', description: 'Descripción de la empresa 8.', email: 'empresa8@email.com', services: ['Servicio O', 'Servicio P'] }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.empresa = this.companies.find(c => c.id === id);
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.language = 'ES';
  }

  setLanguage(lang: string) {
    this.language = lang;
    this.translate.use(lang.toLowerCase());
  }
}
