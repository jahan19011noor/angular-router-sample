import { TestBed } from '@angular/core/testing';

import { CrisisCenterService } from './crisis-center.service';

describe('CrisisCenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrisisCenterService = TestBed.get(CrisisCenterService);
    expect(service).toBeTruthy();
  });
});
