import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderComponent } from './reminder.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {InvoiceService} from '../../../shared/services/invoice.service';
import {of} from 'rxjs';

describe('ReminderComponent', () => {
  let component: ReminderComponent;
  let fixture: ComponentFixture<ReminderComponent>;
  let invoiceService: InvoiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ReminderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run postReminders in init', () => {
    invoiceService = fixture.debugElement.injector.get(InvoiceService);
    const invoiceServiceSpy = spyOn(invoiceService, 'postReminders').and.returnValue(of({}));
    component.sendReminder();
    expect(invoiceServiceSpy).toHaveBeenCalled();
  });
});
