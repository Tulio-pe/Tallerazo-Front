import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWorkshopFormComponent } from './register-workshop-form.component';

describe('RegisterWorkshopComponent', () => {
  let component: RegisterWorkshopFormComponent;
  let fixture: ComponentFixture<RegisterWorkshopFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterWorkshopFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterWorkshopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
