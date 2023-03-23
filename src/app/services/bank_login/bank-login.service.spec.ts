import { TestBed } from '@angular/core/testing';

import { BankLoginService } from './bank-login.service';

describe('BankLoginService', () => {
  let service: BankLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
