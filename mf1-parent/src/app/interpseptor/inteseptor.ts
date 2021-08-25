import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {CommonServicesService} from "../services/common-services.service";

const newUrl = "http://localhost:8085/products-other/"

@Injectable()
export class ServerRouteInterceptor implements HttpInterceptor {

  constructor(private commonService: CommonServicesService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log({req});
    // const req2 = new HttpRequest(req.method, newUrl, req.body);

    // return next.handle(req2);
    if (this.commonService.isAuthorized()) {
      let request = req.clone({
        setHeaders: {
          Authorization: `${this.commonService.getToken()?.token}`
        }
      });
      return next.handle(request);
    }
    return next.handle(req);
  }
}
