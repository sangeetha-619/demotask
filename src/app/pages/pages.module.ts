
import { MessagesettingsComponent } from './messagesettings/messagesettings.component';
import { LoansComponent } from './loans/loans.component';
import { CasaaccountsComponent } from './casaaccounts/casaaccounts.component';
import { ProductComponent } from './product/product.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NbMenuModule, NbDatepickerModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { DepositComponent } from './deposit/deposit.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    RouterModule,
    NbDatepickerModule.forRoot(),
  ],
  declarations: [
    PagesComponent,
    OffersComponent,
    ProductComponent,
    CasaaccountsComponent,
    LoansComponent,
    MessagesettingsComponent,
    DepositComponent,
    
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PagesModule {
}
