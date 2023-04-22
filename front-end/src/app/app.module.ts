import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BitCoinExchangeComponent} from "./bitcoin/exchange.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {BitCoinExchangeService} from "./bitcoin/exchange.service";
import { HttpClientModule } from "@angular/common/http";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  declarations: [
    BitCoinExchangeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [BitCoinExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
