import { TestBed } from '@angular/core/testing';

import { SAPIService } from './sapi.service';

describe('SAPIService', () => {
  let service: SAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
