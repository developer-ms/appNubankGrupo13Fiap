import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nbk-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.scss'],
})
export class SaldoComponent implements OnInit {

  @Input() label: string;
  @Input() saldoAtual: number;

  constructor() { }

  ngOnInit() {}

}
