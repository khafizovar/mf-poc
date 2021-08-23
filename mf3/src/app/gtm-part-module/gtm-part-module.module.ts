import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GtmPartModuleRoutingModule } from './gtm-part-module-routing.module';
import { GtmPartModuleComponent } from './gtm-part-module.component';
import {TableModule} from 'primeng/table';
// import {BrowserModule} from "@angular/platform-browser";
// import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    GtmPartModuleComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    GtmPartModuleRoutingModule,
    HttpClientModule
    // BrowserModule,
    // BrowserAnimationsModule
  ],
  providers: [
  ]
})
export class GtmPartModuleModule { }
