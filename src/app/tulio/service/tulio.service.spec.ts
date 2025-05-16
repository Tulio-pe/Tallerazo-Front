import { TestBed } from '@angular/core/testing';

import { TulioService } from './tulio.service';

describe('TulioService', () => {
  let service: TulioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TulioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
