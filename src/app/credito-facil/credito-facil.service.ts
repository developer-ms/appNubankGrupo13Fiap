import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreditoFacilService {

  constructor(private http: HttpClient) { }

  postEasyCredit(easyCredit: any): Observable<boolean> {

    return this.http.post(`${environment.api}/conta-corrente/credito-facil`, easyCredit)
      .map((response: boolean) => response)
  }
}
