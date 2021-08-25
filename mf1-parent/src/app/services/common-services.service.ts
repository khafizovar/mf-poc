import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


export interface AuthorizationSuccesses {
  "success": boolean,
  "token": string
}

export interface OurRoute {
  "moduleName": string;
  "id": number,
  "name": string,
  "url": string,
  "config": string,
  "description": string,
  "method": string,
  "titleName": string,
  "rightTypeId": number,
  "createdDate": Date
}

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {

  private serverUrl = "http://localhost:8080";
  private token: AuthorizationSuccesses | undefined;

  constructor(private http: HttpClient) { }

  /**
   * Авторизация
   * @param userName
   * @param password
   */
  public auth(userName: String, password: String): Promise<AuthorizationSuccesses> {
    const body = {
      "username": "admin",
      "password": "Qwerty123"
    }
    return new Promise((resolve, reject) => {
      this.http.post<AuthorizationSuccesses>(this.serverUrl + '/api/auth/signin', body).subscribe((value: AuthorizationSuccesses) => {
        this.token = value;
        resolve(this.token);
      }, error => {
        alert(`authentication failed ${JSON.stringify(error)}`);
        reject(error)
      });
    });
  }

  /**
   * Получить текущий токен
   */
  public getToken(): AuthorizationSuccesses | null{
    return (this.token) ? <AuthorizationSuccesses>this.token : null;
  }

  /**
   * Получить список роутов
   */
  public getRoutes(): Promise<OurRoute[]> {
    return new Promise((resolve, reject) => {
      this.http.get<OurRoute[]>(this.serverUrl + '/api/v1/endpoints/routes/').subscribe((value: OurRoute[]) => {
        resolve(value);
      }, error => {
        alert(`authetification failed ${JSON.stringify(error)}`);
        reject(error)
      });
    });
  }

  isAuthorized() {
    return !!(this.token);
  }
}
