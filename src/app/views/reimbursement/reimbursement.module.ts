// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ClaimerComponent } from './claimer.component';
import { ApproverComponent } from "./approver.component";
import { FinanceComponent } from "./finance.component";
import { Ng2SmartTableModule } from "ng2-smart-table";

// Components Routing
import { ReimbursementRoutingModule } from './reimbursement-routing.module';

@NgModule({
  imports: [
    ReimbursementRoutingModule,
    Ng2SmartTableModule,
   
  ],
  declarations: [
    ClaimerComponent,
    ApproverComponent,
    FinanceComponent
  ]
})
export class ReimbursementModule { }
