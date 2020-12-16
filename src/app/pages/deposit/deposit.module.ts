import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbCardModule, NbInputModule, NbButtonModule, NbStepperModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositRoutingModule } from './deposit-routing.module';
import { ListComponent } from './list/list.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { DepositComponent } from './deposit.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [ListComponent, UserlistComponent, TransactionlistComponent],
  imports: [
    CommonModule,
    DepositRoutingModule,
    NbCardModule,
    NbEvaIconsModule,
    NbInputModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbStepperModule,
  ]
})
export class DepositModule { }
