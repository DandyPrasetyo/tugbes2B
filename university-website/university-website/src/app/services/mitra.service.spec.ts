import { TestBed } from '@angular/core/testing';

import { MitraService } from './mitra.service';

describe('MitraService', () => {
  let service: MitraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MitraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
