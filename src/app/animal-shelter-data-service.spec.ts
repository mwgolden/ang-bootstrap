import { TestBed } from '@angular/core/testing';

import { AnimalShelterDataServiceService } from './animal-shelter-data-service.service';

describe('AnimalShelterDataServiceService', () => {
  let service: AnimalShelterDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalShelterDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
