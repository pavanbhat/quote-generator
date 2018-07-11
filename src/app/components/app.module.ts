import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { QouteComponentComponent } from './qoute-component/qoute-component.component';
import {QuoteService} from '../services/quote.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
