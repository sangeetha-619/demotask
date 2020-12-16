import { DepositdetailsComponent } from './depositdetails/depositdetails.component';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';


const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children:[
      {
        path: 'accountdetails',
        component: AccountdetailsComponent,
      },
      {
        path: 'loandetails',
        component:  LoandetailsComponent,
      },
      {
        path: 'depositdetails',
        component:  DepositdetailsComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
