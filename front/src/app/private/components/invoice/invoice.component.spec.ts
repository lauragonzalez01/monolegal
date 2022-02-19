import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InvoiceComponent} from './invoice.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {InvoiceService} from '../../../shared/services/invoice.service';

describe('InvoiceComponent', () => {
  let component: InvoiceComponent;
  let fixture: ComponentFixture<InvoiceComponent>;
  let invoiceService: InvoiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [InvoiceComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run ngOnit method', () => {
    component.ngOnInit();
    expect(component.ngOnInit).toBeDefined();
  });

  it('should run getInvoices in init', () => {
    invoiceService = fixture.debugElement.injector.get(InvoiceService);
    const invoiceServiceSpy = spyOn(invoiceService, 'getInvoices').and.returnValue(of({}));
    component.ngOnInit();
    expect(invoiceServiceSpy).toHaveBeenCalled();
  });
});
