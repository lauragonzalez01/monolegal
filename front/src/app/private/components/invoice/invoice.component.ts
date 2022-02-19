import { Component, OnInit } from '@angular/core';
import {InvoiceService} from "../../../shared/services/invoice.service";
import {Invoice} from "../../../shared/models/invoice";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoices: Invoice[] = [];

  constructor(public invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe(
      res => {
        this.invoices = res as Invoice[];
      }
    );
  }

}
