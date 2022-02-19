import {inject, TestBed} from '@angular/core/testing';

import { ClientService } from './client.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('ClientService', () => {
  let service: ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ClientService,
        HttpClient
      ]
    });
    service = TestBed.inject(ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get clients', inject([HttpClient]
    , (httpClient: HttpClient) => {
      const httpGetSpy = spyOn(httpClient, 'get');
      service.getClients();
      expect(httpGetSpy).toHaveBeenCalled();
    }));
});
