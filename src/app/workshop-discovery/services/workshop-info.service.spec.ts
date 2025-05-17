import { TestBed } from '@angular/core/testing';

import { WorkshopInfoService } from './workshop-info.service';

describe('WorkshopInfoService', () => {
  let service: WorkshopInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkshopInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
