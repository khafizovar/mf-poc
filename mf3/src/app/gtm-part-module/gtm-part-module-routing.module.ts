import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GtmPartModuleComponent } from './gtm-part-module.component';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [{ path: '', component: GtmPartModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GtmPartModuleRoutingModule { }
