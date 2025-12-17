import { TestBed } from '@angular/core/testing';

import { LoginServiceTsService } from './login.service.ts.service';

describe('LoginServiceTsService', () => {
  let service: LoginServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
