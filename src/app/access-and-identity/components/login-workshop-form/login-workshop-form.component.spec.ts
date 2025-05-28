import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWorkshopComponent } from './login-workshop.component';

describe('LoginWorkshopComponent', () => {
  let component: LoginWorkshopComponent;
  let fixture: ComponentFixture<LoginWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWorkshopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
