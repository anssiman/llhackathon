import { TestBed, inject } from '@angular/core/testing';

import { DrawLotsService } from './draw-lots.service';

describe('DrawLotsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawLotsService]
    });
  });

  it('should be created', inject([DrawLotsService], (service: DrawLotsService) => {
    expect(service).toBeTruthy();
  }));
});
