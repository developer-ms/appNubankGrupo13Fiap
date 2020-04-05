import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditoFacilPageRoutingModule } from './credito-facil-routing.module';

import { CreditoFacilPage } from './credito-facil.page';
import { SliderRangeComponent } from '../conta-corrente/components/slider-range/slider-range.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CreditoFacilPageRoutingModule
  ],
  declarations: [CreditoFacilPage, SliderRangeComponent]
})
export class CreditoFacilPageModule {}
