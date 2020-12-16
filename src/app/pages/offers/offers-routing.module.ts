import { CreateofferComponent } from './createoffer/createoffer.component';
import { OffersComponent } from './offers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: OffersComponent,
    children:[
      {
        path: 'createoffer',
        component: CreateofferComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
