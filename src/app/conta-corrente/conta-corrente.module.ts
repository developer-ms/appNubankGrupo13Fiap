import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaCorrentePageRoutingModule } from './conta-corrente-routing.module';

import { ContaCorrentePage } from './conta-corrente.page';

import { ComponentsModule } from '../components/components.module';
import { SaldoComponent } from './components/saldo/saldo.component';
import { TransacaoComponent } from './components/transacao/transacao.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    ContaCorrentePageRoutingModule
  ],
  declarations: [ContaCorrentePage, SaldoComponent, TransacaoComponent]
})
export class ContaCorrentePageModule {}
