import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {loadRemoteModule} from "@angular-architects/module-federation";
import {SecondRouteComponentComponent} from "./second-route-component/second-route-component.component";
import {HttpClientModule} from "@angular/common/http";

// const styleLoader = (url: string) => {
//   var head  = document.getElementsByTagName('head')[0];
//   var link  = document.createElement('link');
//   link.rel  = 'stylesheet';
//   link.type = 'text/css';
//   link.href = url;
//   link.media = 'all';
//   head.appendChild(link);
// }

const routes: Routes = [{
  path: 'lazyGtmModule',
  loadChildren: () =>
    loadRemoteModule({
      remoteEntry: 'http://localhost:3004/remoteEntry.js',
      remoteName: 'mf3',
      exposedModule: './lazyGtmModule'
    }).then(m => m.GtmPartModuleRoutingModule)
      .catch(error => {
        console.error(error);
      })
},
  {
    path: 'child2',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:3004/remoteEntry.js',
        remoteName: 'mf3',
        exposedModule: './m2'
      }).then(m => m.ModuleaRoutingModule)
        .catch(error => {
          console.error(error);
        })
  },
  {
    path: 'second', component: SecondRouteComponentComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [HttpClientModule]
})
export class AppRoutingModule {
}
