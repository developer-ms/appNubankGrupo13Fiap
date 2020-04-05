import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaCorrentePage } from './conta-corrente.page';

const routes: Routes = [
  {
    path: '',
    component: ContaCorrentePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaCorrentePageRoutingModule {}
