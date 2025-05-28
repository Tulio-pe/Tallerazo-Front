import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWorkshopPageComponent } from './register-workshop-page.component';

describe('RegisterPageComponent', () => {
  let component: RegisterWorkshopPageComponent;
  let fixture: ComponentFixture<RegisterWorkshopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterWorkshopPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterWorkshopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
