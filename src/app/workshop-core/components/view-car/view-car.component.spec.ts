import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarComponent } from './view-car.component';

describe('ViewCarComponent', () => {
  let component: ViewCarComponent;
  let fixture: ComponentFixture<ViewCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
