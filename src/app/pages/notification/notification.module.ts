import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { NotifyComponent } from './notify/notify.component';


@NgModule({
  declarations: [NotificationComponent, NotifyComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule { }
