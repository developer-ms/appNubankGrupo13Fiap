import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { Transation } from './components/transacao/transacao.model';
import { Account } from './conta-corrente.model';
import { ContaCorrenteService } from './conta-corrente.service';


@Component({
  selector: 'nbk-conta-corrente',
  templateUrl: './conta-corrente.page.html',
  styleUrls: ['./conta-corrente.page.scss'],
})
export class ContaCorrentePage implements OnInit {

  userId: number

  account: Account
  transations: Transation[]
  validFutureTransation: boolean = false
  futureTransations: Transation[]
  transationClose: boolean
  transationFutureClose: boolean

  constructor(private route: ActivatedRoute, private nav: Router, private contaCorrenteService: ContaCorrenteService) {
    this.route.queryParams.subscribe(params => {
      let getNav = this.nav.getCurrentNavigation()
      if (getNav.extras.state) {
        this.userId = getNav.extras.state.userId
      }})
   }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.transationClose = true
      this.contaCorrenteService.getCheckingAccount(this.userId)
      .subscribe(account => this.account = account, error =>{ this.nav.navigate(['login'])})

      this.contaCorrenteService.getFutureTransation(this.userId)
      .subscribe(futureTransations => this.futureTransations = futureTransations, error =>{ this.nav.navigate(['login'])})

      this.contaCorrenteService.getTransation(this.userId)
      .subscribe(transation => this.transations = transation, error =>{ this.nav.navigate(['login'])})
  }


  callEasyCreditPage(){
    let navigationExtras: NavigationExtras = {
      state: {
        userId: this.userId
      }
    }
    this.nav.dispose()
    this.nav.navigate(['credito-facil'], navigationExtras)
  }
}
