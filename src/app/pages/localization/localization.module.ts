import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizationRoutingModule } from './localization-routing.module';
import { LocalizationComponent } from './localization.component';
import { LocalizeComponent } from './localize/localize.component';


@NgModule({
  declarations: [LocalizationComponent, LocalizeComponent],
  imports: [
    CommonModule,
    LocalizationRoutingModule,
    NbCardModule,
    NbButtonModule
  ]
})
export class LocalizationModule { }
