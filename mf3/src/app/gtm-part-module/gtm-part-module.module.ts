import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GtmPartModuleRoutingModule } from './gtm-part-module-routing.module';
import { GtmPartModuleComponent } from './gtm-part-module.component';


@NgModule({
  declarations: [
    GtmPartModuleComponent
  ],
  imports: [
    CommonModule,
    GtmPartModuleRoutingModule
  ]
})
export class GtmPartModuleModule { }
