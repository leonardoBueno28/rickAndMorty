/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { GeneralServiceService } from './general-service.service';

describe('Service: GeneralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralServiceService],
      imports:[HttpClientTestingModule]
    });
  });

  it('should ...', inject([GeneralServiceService], (service: GeneralServiceService) => {
    expect(service).toBeTruthy();
  }));
});
