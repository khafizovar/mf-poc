import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GtmPartModuleRoutingModule} from "./gtm-part-module/gtm-part-module-routing.module";

const routes: Routes = [
  { path: 'a', loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule) },
  { path: 'gtm', loadChildren: () => import('./gtm-part-module/gtm-part-module.module').then(m => m.GtmPartModuleModule) },
  { path: 'gtm2', loadChildren: () => import('./gtm-part-module/gtm-part-module-routing.module').then(m => m.GtmPartModuleRoutingModule) },
  { path: '**', loadChildren: () => import('./gtm-part-module/gtm-part-module.module').then(m => m.GtmPartModuleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
