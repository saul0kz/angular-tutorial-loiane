/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VerificaEmailServiceService } from './verifica-email-service.service';

describe('Service: VerificaEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificaEmailServiceService]
    });
  });

  it('should ...', inject([VerificaEmailServiceService], (service: VerificaEmailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
