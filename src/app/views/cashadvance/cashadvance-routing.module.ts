import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimerComponent } from "./claimer.component";
import { ApproverComponent } from './approver.component';
import { FinanceComponent } from './finance.component';
import { VerificatorComponent } from './verificator.component';

const routes: Routes=[
    {
        path:'',
        data:{
            title:'Cash Advance'
        },
        children: [
            {
              path: 'claimer',
              component: ClaimerComponent,
              data: {
                title: 'Claimer'
              }
            },
            {
                path: 'approver',
                component: ApproverComponent,
                data: {
                  title: 'Approver'
                }
            },
            {
                path: 'finance',
                component: FinanceComponent,
                data: {
                  title: 'Finance'
                }
            },
            {
                path: 'verificator',
                component: VerificatorComponent,
                data: {
                  title: 'Verificator'
                }
            }

        ]
    }
];

@NgModule({
    imports : [
        RouterModule.forChild(routes)
        
    ],
    exports:[RouterModule]
})
export class CashadvanceRoutingModule{}