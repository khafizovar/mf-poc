import { Injectable } from '@angular/core';
import {Product} from "../gtm-part-module/gtm-part-module.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// import {GtmPartModuleModule} from "../gtm-part-module/gtm-part-module.module";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class TestServiceService {
  private serverUrl = "http://localhost:3004";

  constructor(private http: HttpClient) { }
  // constructor() { }

  public getProducts(): Observable<Array<Product>> {
    return this.http.get<Product[]>(this.serverUrl + '/products/');
  }
  // public getProducts(): [] {
  //   return [];
  // }
}
