import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageWorkshopComponent } from './login-page-workshop.component';

describe('LoginPageComponent', () => {
  let component: LoginPageWorkshopComponent;
  let fixture: ComponentFixture<LoginPageWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageWorkshopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
