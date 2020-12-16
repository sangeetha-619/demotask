import { NbCardModule, NbFontIcon, NbIconModule, NbButtonModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { CreateofferComponent } from './createoffer/createoffer.component';


@NgModule({
  declarations: [CreateofferComponent],
  imports: [
    CommonModule,
    OffersRoutingModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule
  ]
})
export class OffersModule { }
