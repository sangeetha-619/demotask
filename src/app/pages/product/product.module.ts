import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbInputModule, NbFormFieldModule, NbCardModule, NbIconModule, NbButtonModule, NbDatepickerModule} from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { DepositdetailsComponent } from './depositdetails/depositdetails.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';



@NgModule({
  declarations: [LoandetailsComponent, DepositdetailsComponent, AccountdetailsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NbInputModule,
    NbFormFieldModule,
    NbCardModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    NbDatepickerModule
  ]
})
export class ProductModule { }
