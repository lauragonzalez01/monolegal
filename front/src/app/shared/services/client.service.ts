import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  readonly URL_API = 'http://localhost:5282/api/';

  constructor(private http: HttpClient) { }

  getClients(){
    return this.http.get(this.URL_API + 'client');
  }
}
