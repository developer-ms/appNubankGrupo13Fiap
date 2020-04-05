import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { Account } from './conta-corrente.model';
import { Transation } from './components/transacao/transacao.model';

@Injectable({
  providedIn: 'root'
})
export class ContaCorrenteService {

  constructor(private http: HttpClient) { }

  getCheckingAccount(userId?: number): Observable<Account> {
    return this.http.get(`${environment.api}/conta-corrente?userId=${userId}`)
      .map((response: Account) => response)
  }


  getTransation(userId?: number): Observable<Transation[]> {
    return this.http.get(`${environment.api}/conta-corrente/transacao?userId=${userId}`)
      .map((response: Transation[]) => response)
  }

  getFutureTransation(userId?: number): Observable<Transation[]> {
    return this.http.get(`${environment.api}/conta-corrente/transacao-futura?userId=${userId}`)
      .map((response: Transation[]) => response)
  }

}
