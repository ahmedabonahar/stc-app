/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientApiService } from './client-api.service';

describe('Service: ClientApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientApiService]
    });
  });

  it('should ...', inject([ClientApiService], (service: ClientApiService) => {
    expect(service).toBeTruthy();
  }));
});
