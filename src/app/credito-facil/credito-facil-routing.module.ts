import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditoFacilPage } from './credito-facil.page';

const routes: Routes = [
  {
    path: '',
    component: CreditoFacilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditoFacilPageRoutingModule {}
