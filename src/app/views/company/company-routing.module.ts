import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { ExpenseCategoryComponent } from './expensecategory.component';
import { TagComponent } from "./tag.component";
import { TeamComponent } from './team.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Company'
    },
    children: [
      {
        path: 'team',
        component: TeamComponent,
        data:{
          title: 'Team'
        }
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        data: {
          title: 'Employee'
        }
      },
      {
        path: 'expensecategory',
        component: ExpenseCategoryComponent,
        data: {
          title: 'Expense Category'
        }
      },
      {
        path: 'tag',
        component: TagComponent,
        data: {
          title: 'Tag'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {}
