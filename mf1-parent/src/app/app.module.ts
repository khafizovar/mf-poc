import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondRouteComponentComponent } from './second-route-component/second-route-component.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ServerRouteInterceptor} from "./interpseptor/inteseptor";
import {ListboxModule} from "primeng/listbox";

@NgModule({
  declarations: [
    AppComponent,
    SecondRouteComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ListboxModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServerRouteInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
