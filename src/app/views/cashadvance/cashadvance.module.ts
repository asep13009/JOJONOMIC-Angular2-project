import { NgModule } from '@angular/core';

import { ClaimerComponent } from "./claimer.component";
import { ApproverComponent } from "./approver.component";

import { CashadvanceRoutingModule } from "./cashadvance-routing.module";
import { FinanceComponent } from './finance.component';
import { VerificatorComponent } from './verificator.component';
import { Ng2SmartTableModule } from "ng2-smart-table";

@NgModule({
    imports:[
        CashadvanceRoutingModule,
        Ng2SmartTableModule,
    ],
    declarations:[ 
        ClaimerComponent,
        ApproverComponent,
        FinanceComponent,
        VerificatorComponent
    ]
})
export class CashAdvanceModule{}