import {Component, OnInit} from '@angular/core';
import {InvoiceService} from '../../../shared/services/invoice.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {

  constructor(public invoiceService: InvoiceService) {
  }

  reminderState = '';

  ngOnInit(): void {
  }

  sendReminder() {
    this.invoiceService.postReminders().subscribe(
      res => {
        this.reminderState = 'Se han enviado los correos de recordatorio correctamente y se han actualizado los estados en la base de datos exitosamente.'
      }, error => {
        this.reminderState = 'Se ha presentado un error, intente de nuevo más tarde.';
      }
    );
  }
}
