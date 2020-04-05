import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { Login, LoginAccess } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpNative: HTTP, private http: HttpClient) { }

  checkLogin(login: Login): Observable<LoginAccess> {

    return this.http.post(`${environment.api}/autenticacao`, JSON.stringify(login))
      .map((response: LoginAccess) => response)
  }
}
