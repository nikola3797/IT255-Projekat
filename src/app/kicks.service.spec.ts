import { TestBed } from '@angular/core/testing';

import { KicksService } from './kicks.service';

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KicksService = TestBed.get(KicksService);
    expect(service).toBeTruthy();
  });
});
