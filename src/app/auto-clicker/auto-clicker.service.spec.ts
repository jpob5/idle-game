import { TestBed } from '@angular/core/testing';

import { AutoClickerService } from './auto-clicker.service';

describe('AutoClickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoClickerService = TestBed.get(AutoClickerService);
    expect(service).toBeTruthy();
  });
});
