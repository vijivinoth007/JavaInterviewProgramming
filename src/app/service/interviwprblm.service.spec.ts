import { TestBed } from '@angular/core/testing';

import { InterviwprblmService } from './interviwprblm.service';

describe('InterviwprblmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterviwprblmService = TestBed.get(InterviwprblmService);
    expect(service).toBeTruthy();
  });
});
