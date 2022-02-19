import {inject, TestBed} from '@angular/core/testing';

import {InvoiceService} from './invoice.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('InvoiceService', () => {
  let service: InvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        InvoiceService,
        HttpClient
      ]
    });
    service = TestBed.inject(InvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get invoices', inject([HttpClient]
    , (httpClient: HttpClient) => {
      const httpGetSpy = spyOn(httpClient, 'get');
      service.getInvoices();
      expect(httpGetSpy).toHaveBeenCalled();
    }));

  it('should post reminders', inject([HttpClient]
    , (httpClient: HttpClient) => {
      const httpPostSpy = spyOn(httpClient, 'post');
      service.postReminders();
      expect(httpPostSpy).toHaveBeenCalled();
    }));
});
