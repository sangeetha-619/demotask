import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesettingsRoutingModule } from './messagesettings-routing.module';
import { EmailtemplateComponent } from './emailtemplate/emailtemplate.component';
import { NgbModalModule, NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [EmailtemplateComponent],
  imports: [
    CommonModule,
    MessagesettingsRoutingModule,
  ]
})
export class MessagesettingsModule { }
