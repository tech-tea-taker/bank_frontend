import { TestBed } from '@angular/core/testing';

import { BankCustomerService } from './bank-customer.service';

describe('BankCustomerService', () => {
  let service: BankCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
