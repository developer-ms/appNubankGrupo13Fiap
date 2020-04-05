import { Component, OnInit, Input } from '@angular/core';
import { Transation } from './transacao.model';

@Component({
  selector: 'nbk-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.scss'],
})
export class TransacaoComponent implements OnInit {

  @Input() transation: Transation
  icon: string

  constructor() { }

  ngOnInit() {
    if (this.transation.description === "Depósito realizado") {
      this.icon = "arrow-down-circle-outline"
    }
    if (this.transation.description === "Transferência realizada") {
      this.icon = "arrow-up-circle-outline"
    }
    if (this.transation.description === "Crédito contratado") {
      this.icon = "card-outline"
    }

  }

}
