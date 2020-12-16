import { LocalizationComponent } from './localization.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeComponent } from './localize/localize.component';


const routes: Routes = [
  {
    path: '',
    component: LocalizationComponent,
    children:[
      {
        path: 'localize',
        component: LocalizeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalizationRoutingModule { }
