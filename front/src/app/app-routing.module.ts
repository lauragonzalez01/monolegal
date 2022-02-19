import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvoiceComponent} from './private/components/invoice/invoice.component';
import {EmptyRouteComponent} from './shared/components/empty-route/empty-route.component';
import {ReminderComponent} from './private/components/reminder/reminder.component';
import {ClientComponent} from './private/components/client/client.component';

const routes: Routes = [
  { path: 'invoice', component: InvoiceComponent },
  { path: 'reminder', component: ReminderComponent },
  { path: 'client', component: ClientComponent },

  { path: '**', component: EmptyRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
