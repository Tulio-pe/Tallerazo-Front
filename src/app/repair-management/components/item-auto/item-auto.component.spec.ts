import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAutoComponent } from './item-auto.component';

describe('ItemAutoComponent', () => {
  let component: ItemAutoComponent;
  let fixture: ComponentFixture<ItemAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemAutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
