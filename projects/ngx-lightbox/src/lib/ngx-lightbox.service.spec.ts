import { TestBed, inject } from '@angular/core/testing';

import { NgxLightboxService } from './ngx-lightbox.service';

describe('NgxLightboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxLightboxService]
    });
  });

  it('should be created', inject([NgxLightboxService], (service: NgxLightboxService) => {
    expect(service).toBeTruthy();
  }));
});
