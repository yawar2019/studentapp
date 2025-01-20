import { TestBed } from '@angular/core/testing';

import { AppguardServiceService } from './appguard-service.service';

describe('AppguardServiceService', () => {
  let service: AppguardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppguardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
