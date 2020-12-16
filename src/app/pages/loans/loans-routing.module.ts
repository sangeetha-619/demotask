import { UsertransactionsComponent } from './usertransactions/usertransactions.component';
import { UsersComponent } from './users/users.component';
import { ListsComponent } from './lists/lists.component';
import { LoansComponent } from './loans.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LoansComponent,
    children:[
      {
        path: 'lists',
        component: ListsComponent
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
      path: 'usertransactions',
      component: UsertransactionsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }
