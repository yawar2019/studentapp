import { TestBed } from '@angular/core/testing';

import { GetEmployeesServiceService } from './get-employees-service.service';

describe('GetEmployeesServiceService', () => {
  let service: GetEmployeesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEmployeesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
