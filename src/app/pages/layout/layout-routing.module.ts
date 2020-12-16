import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { BankregisterComponent } from './bankregister/bankregister.component';
import { BranchregisterComponent } from './branchregister/branchregister.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'bankregister',
      component: BankregisterComponent,
    },
    {
      path: 'branchregister',
      component: BranchregisterComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
