import { TestBed } from '@angular/core/testing';

import { AppDeactiveGuardService } from './app-deactive-guard.service';

describe('AppDeactiveGuardService', () => {
  let service: AppDeactiveGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDeactiveGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
