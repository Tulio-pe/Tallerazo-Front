import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWorkshopFormComponent } from './login-workshop-form.component';

describe('LoginWorkshopComponent', () => {
  let component: LoginWorkshopFormComponent;
  let fixture: ComponentFixture<LoginWorkshopFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWorkshopFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWorkshopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
