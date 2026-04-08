import { TestBed } from '@angular/core/testing';

import { HarryPotter } from './harry-potter';

describe('HarryPotter', () => {
  let service: HarryPotter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarryPotter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
