import { TestBed } from '@angular/core/testing';

import { LebenslaufService } from './lebenslauf.service';

describe('LebenslaufService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LebenslaufService = TestBed.get(LebenslaufService);
    expect(service).toBeTruthy();
  });
});
