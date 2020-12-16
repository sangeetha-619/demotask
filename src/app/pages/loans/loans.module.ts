import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbStepperModule, NbCardModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { ListsComponent } from './lists/lists.component';
import { UsersComponent } from './users/users.component';
import { UsertransactionsComponent } from './usertransactions/usertransactions.component';
import { LoansComponent } from './loans.component';


@NgModule({
  declarations: [ListsComponent, UsersComponent, UsertransactionsComponent],
  imports: [
    CommonModule,
    LoansRoutingModule,
    NbStepperModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule
  ]
})
export class LoansModule { }
