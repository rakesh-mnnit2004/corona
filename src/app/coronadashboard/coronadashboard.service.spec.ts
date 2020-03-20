import { TestBed } from '@angular/core/testing';

import { CoronadashboardService } from './coronadashboard.service';

describe('CoronadashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoronadashboardService = TestBed.get(CoronadashboardService);
    expect(service).toBeTruthy();
  });
});
