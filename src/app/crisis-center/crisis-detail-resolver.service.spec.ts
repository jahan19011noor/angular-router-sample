import { TestBed } from '@angular/core/testing';

import { CrisisDetailResolverService } from './crisis-detail-resolver.service';

describe('CrisisDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrisisDetailResolverService = TestBed.get(CrisisDetailResolverService);
    expect(service).toBeTruthy();
  });
});
