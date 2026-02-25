import { TestBed } from '@angular/core/testing';

import { Customer } from './customer';

describe('Customer', () => {
  let service: Customer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Customer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
