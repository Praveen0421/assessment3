import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



const route:Routes=[
  {path:'employeelist',component:EmployeeListComponent},
  {path:'',redirectTo:'/employeelist',pathMatch:'full'},
  {path:'employeeform',component:EmployeeFormComponent},
  {path:'employeeupdate/:id',component:EmployeeFormComponent}
]

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent,


  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule
  ],
  exports:[
    EmployeeListComponent,
    EmployeeFormComponent,

  ]
})
export class EmployeesModule { }
