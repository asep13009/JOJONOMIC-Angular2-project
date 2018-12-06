import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimerComponent } from './claimer.component';
import { ApproverComponent } from './approver.component';
import { FinanceComponent } from "./finance.component";


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reimbursement'
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReimbursementRoutingModule {}
