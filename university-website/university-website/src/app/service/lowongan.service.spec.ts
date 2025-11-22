import { TestBed } from '@angular/core/testing';

import { LowonganService } from './lowongan.service';

describe('LowonganService', () => {
  let service: LowonganService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LowonganService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
