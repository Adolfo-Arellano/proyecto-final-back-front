import { TestBed } from '@angular/core/testing';

import { Peluquero } from './peluquero';

describe('Peluquero', () => {
  let service: Peluquero;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Peluquero);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
