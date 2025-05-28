import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidebarWorkshopComponent } from './slidebar-workshop.component';

describe('SlidebarWorkshopComponent', () => {
  let component: SlidebarWorkshopComponent;
  let fixture: ComponentFixture<SlidebarWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidebarWorkshopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidebarWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
