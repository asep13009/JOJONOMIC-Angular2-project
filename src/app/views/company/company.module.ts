// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { EmployeeComponent } from './employee.component';
import { ExpenseCategoryComponent } from "./expensecategory.component";
import { TagComponent } from "./tag.component";
import { TeamComponent } from "./team.component";
import { Ng2SmartTableModule } from "ng2-smart-table";
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';


// Components Routing
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  imports: [
    CompanyRoutingModule,
    Ng2SmartTableModule,
    ModalModule.forRoot()
   
  ],
  declarations: [
 
    TeamComponent,
    EmployeeComponent,
    ExpenseCategoryComponent,
    TagComponent
  ]
})
export class CompanyModule { }
