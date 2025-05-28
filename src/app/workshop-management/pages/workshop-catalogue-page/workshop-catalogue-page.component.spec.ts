import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopCataloguePageComponent } from './workshop-catalogue-page.component';

describe('WorkshopCataloguePageComponent', () => {
  let component: WorkshopCataloguePageComponent;
  let fixture: ComponentFixture<WorkshopCataloguePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopCataloguePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopCataloguePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
