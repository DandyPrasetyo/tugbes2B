import { TestBed } from '@angular/core/testing';

import { MagangService } from './magang.service';

describe('MagangService', () => {
  let service: MagangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
