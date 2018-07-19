import { TestBed, inject } from '@angular/core/testing';

import { MultiselectService } from './multiselect.service';

describe('MultiselectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiselectService]
    });
  });

  it('should be created', inject([MultiselectService], (service: MultiselectService) => {
    expect(service).toBeTruthy();
  }));
});
