import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { EmptyRouteComponent } from './shared/components/empty-route/empty-route.component';
import { InvoiceComponent } from './private/components/invoice/invoice.component';
import { ReminderComponent } from './private/components/reminder/reminder.component';
import {HttpClientModule} from '@angular/common/http';
import { ClientComponent } from './private/components/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmptyRouteComponent,
    InvoiceComponent,
    ReminderComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
