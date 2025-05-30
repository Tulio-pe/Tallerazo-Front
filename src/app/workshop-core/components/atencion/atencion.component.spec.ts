import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionComponent } from './atencion.component';

describe('AtencionComponent', () => {
  let component: AtencionComponent;
  let fixture: ComponentFixture<AtencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtencionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
