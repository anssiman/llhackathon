import { TestBed, inject } from '@angular/core/testing';

import { CardFirebaseService } from './card.firebase.service';

describe('CardFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardFirebaseService]
    });
  });

  it('should be created', inject([CardFirebaseService], (service: CardFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
