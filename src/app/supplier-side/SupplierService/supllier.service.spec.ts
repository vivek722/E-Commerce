import { TestBed } from '@angular/core/testing';

import { SupllierService } from './supllier.service';

describe('SupllierService', () => {
  let service: SupllierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupllierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
