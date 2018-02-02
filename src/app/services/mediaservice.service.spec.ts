import { TestBed, inject } from '@angular/core/testing';

import { MediaserviceService } from './mediaservice.service';

describe('MediaserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaserviceService]
    });
  });

  it('should be created', inject([MediaserviceService], (service: MediaserviceService) => {
    expect(service).toBeTruthy();
  }));
});
