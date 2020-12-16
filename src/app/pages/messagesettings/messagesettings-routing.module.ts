import { EmailtemplateComponent } from './emailtemplate/emailtemplate.component';
import { MessagesettingsComponent } from './messagesettings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: MessagesettingsComponent,
    children:[
      {
        path: 'emailtemplate',
        component: EmailtemplateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesettingsRoutingModule { }
