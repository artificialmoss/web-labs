import { TestBed } from '@angular/core/testing';

import { PointsService } from './points.service';

describe('PointsProviderService', () => {
  let service: PointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
