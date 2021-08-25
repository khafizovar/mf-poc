import {AfterViewInit, Component} from '@angular/core';
import {CommonServicesService, OurRoute} from "./services/common-services.service";
import {Route, Router} from "@angular/router";
import {loadRemoteModule} from "@angular-architects/module-federation";
import {SecondRouteComponentComponent} from "./second-route-component/second-route-component.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'mf1-parent';
  logText: any = "";
  routes: any;


  constructor(private commonService: CommonServicesService, private router: Router) {
  }

  log(singleLine: String) {
    // this.logText += '\n\n' + singleLine;
    console.log(singleLine);
  }

  ngAfterViewInit(): void {
    this.log("Попытка авторизации...");
    this.commonService.auth("admin", "Qwerty123").then(value => {
      this.log("Авторизация успешна: \n" + JSON.stringify(value));
      this.log("Запрашиваем список роутов...");
      this.commonService.getRoutes().then(value1 => {
        this.log("Успешно:" + JSON.stringify(value1));
        this.routes = value1;
        this.buildRoutes();
      }, reason => {
        this.log("Ошибка получения списка роутов:\n" + JSON.stringify(reason));
      })
    }, reason => {
      this.log("Авторизация неуспешна:\n" + JSON.stringify(reason));
    });
  }

  routeTo($event: any) {
    this.log("Навигация на " + JSON.stringify($event));
    this.router.navigate([$event.value.name]);
  }

  buildRoutes(): void {
    const newRoutes: Route[] = [];
    this.routes.forEach((item: OurRoute) => {
      const conf = JSON.parse(item.config);
      newRoutes.push({
        path: item.name,
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: item.url,
            remoteName: item.name,
            exposedModule: conf.exposedModule
          }).then(m => {
            console.log("Module loaded");
            console.log({m});
            return m[conf.moduleName];
          })
            .catch(error => {
              console.log("Module loading error");
              console.error(error);
            })
      });
    });
    console.log({newRoutes});
    this.router.resetConfig(newRoutes);
    this.router.initialNavigation();
  }
}
