import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

const newUrl = "http://localhost:8085/products-other/"

@Injectable()
export class ServerRouteInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log({req});
    const req2 = new HttpRequest(req.method, newUrl, req.body);
    return next.handle(req2);
  }
}
