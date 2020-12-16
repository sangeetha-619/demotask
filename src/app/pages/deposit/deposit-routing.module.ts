import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ListComponent } from './list/list.component';
import { DepositComponent } from './deposit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: DepositComponent,
    children:[
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'userlist',
        component: UserlistComponent,
      },
      {
        path: 'transactionlist',
        component: TransactionlistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositRoutingModule { }
