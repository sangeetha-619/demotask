import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeemanagementComponent } from './employeemanagement.component';
import { EmployeemanageComponent } from './employeemanage/employeemanage.component';
import { ELogsComponent } from './e-logs/e-logs.component';
import { ELeavepolicyComponent } from './e-leavepolicy/e-leavepolicy.component';
import { ESalaryComponent } from './e-salary/e-salary.component';



const routes: Routes = [
  {
    path: '',
    component: EmployeemanagementComponent,
    children:[
      {
        path: 'employeemanage',
        component: EmployeemanageComponent
      },
      {
        path: 'e-logs',
        component: ELogsComponent
      },
      {
        path: 'e-leavepolicy',
        component: ELeavepolicyComponent
      },
      {
        path: 'e-salary',
        component: ESalaryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeemanagementRoutingModule { }
