import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ComponentService } from './Component.service';
import { HttpClientModule } from '@angular/common/http';  
import{EmployeeService} from './employee.service'
import { RouterModule, Routes,ActivatedRoute } from '@angular/router';

import { DetailComponentComponent } from './detail-component/detail-component.component';
import { DepartmentComponent } from './department/department.component';
import { AddemployeedetailsComponent } from './addemployeedetails/addemployeedetails.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
;
const appRoutes: Routes = [
  { path: '', component: DepartmentComponent },
  { path: 'ds', component: DetailComponentComponent },
  { path: 'add', component: AddemployeedetailsComponent },
  { path: 'employee/:id', component: EmployeeComponent },
];
@NgModule({
  
  declarations: [
    AppComponent,
    EmployeeComponent,
    DetailComponentComponent,
    DepartmentComponent,
    AddemployeedetailsComponent,
    ParentComponent,
    ChildComponent,
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  exports: [RouterModule],

  providers: [ComponentService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
