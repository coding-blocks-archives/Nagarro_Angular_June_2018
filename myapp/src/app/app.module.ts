import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import {FakeApiService} from './fake-api.service';
import { ServicecompoComponent } from './servicecompo/servicecompo.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ServicecompoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FakeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
