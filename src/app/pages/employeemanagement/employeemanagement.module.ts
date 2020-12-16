import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeemanagementRoutingModule } from './employeemanagement-routing.module';
import { EmployeemanagementComponent } from './employeemanagement.component';
import { EmployeemanageComponent } from './employeemanage/employeemanage.component';
import { NbCardModule, NbButtonModule, NbUserModule, NbIconModule, NbDatepickerModule } from '@nebular/theme';
import { ELogsComponent } from './e-logs/e-logs.component';
import { ELeavepolicyComponent } from './e-leavepolicy/e-leavepolicy.component';
import { ESalaryComponent } from './e-salary/e-salary.component';


@NgModule({
  declarations: [EmployeemanagementComponent, EmployeemanageComponent, ELogsComponent, ELeavepolicyComponent, ESalaryComponent],
  imports: [
    CommonModule,
    EmployeemanagementRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbUserModule,
    NbIconModule,
    NbDatepickerModule
  ]
})
export class EmployeemanagementModule { }
