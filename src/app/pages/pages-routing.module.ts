import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // {
    //   path: 'dashboard',
    //   component: ECommerceComponent,
    // },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'offers',
      loadChildren: () => import('./offers/offers.module')
        .then(m => m.OffersModule),
    },
    {
      path: 'product',
      loadChildren: () => import('./product/product.module')
        .then(m => m.ProductModule),
    },
    {
      path: 'messagesettings',
      loadChildren: () => import('./messagesettings/messagesettings.module')
        .then(m => m.MessagesettingsModule),
    },
    {
      path: 'casaaccounts',
      loadChildren: () => import('./casaaccounts/casaaccounts.module')
        .then(m => m.CasaaccountsModule),
    },
    {
      path: 'deposit',
      loadChildren: () => import('./deposit/deposit.module')
        .then(m => m.DepositModule),
    },
    {
      path: 'loans',
      loadChildren: () => import('./loans/loans.module')
        .then(m => m.LoansModule),
    },
    {
      path: 'localization',
      loadChildren: () => import('./localization/localization.module')
        .then(m => m.LocalizationModule),
    },
    {
      path: 'employeemanagement',
      loadChildren: () => import('./employeemanagement/employeemanagement.module')
        .then(m => m.EmployeemanagementModule),
    },
    {
      path: 'forums',
      loadChildren: () => import('./forums/forums.module')
        .then(m => m.ForumsModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
}
],
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
