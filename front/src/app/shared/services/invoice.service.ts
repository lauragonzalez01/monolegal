import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  readonly URL_API = 'http://localhost:5282/api/';

  constructor(private http: HttpClient) { }

  getInvoices(){
    return this.http.get(this.URL_API + 'invoice');
  }

  postReminders(){
    return this.http.post(this.URL_API + 'invoice', null);
  }
}
