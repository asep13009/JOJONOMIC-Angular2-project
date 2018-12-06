import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JabatanComponent } from './jabatan.component';
import { TypeEmployeeComponent } from './typeemployee.component';

import { RoleComponent } from './role.component';
import { StatusComponent } from './status.component';
import { AccountBankComponent } from './accountbank.component';
import { LiburComponent } from './libur.component';
import { ReimbursementTypeComponent } from './reimbursementtype.component';

const routes: Routes=[
    {
        path:'',
        data:{
            title:'Administrasi'
        },
        children: [
            {
              path: 'jabatan',
              component: JabatanComponent,
              data: {
                title: 'Jabatan'
              }
            },
            {
                path: 'typeemployee',
                component: TypeEmployeeComponent,
                data: {
                  title: 'Type Employee'
                }
            },
          
            {
                path: 'reimbursementtype',
                component: ReimbursementTypeComponent,
                data: {
                  title: 'Reimbursement Type'
                }
            },
            
            {
                path: 'role',
                component: RoleComponent,
                data: {
                  title: 'Role'
                }
            },
            {
                path: 'status',
                component: StatusComponent,
                data: {
                  title: 'Status'
                }
            },
            {
                path: 'accountbank',
                component: AccountBankComponent,
                data: {
                  title: 'Account Bank'
                }
            },
            {
                path: 'libur',
                component: LiburComponent,
                data: {
                  title: 'Libur'
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
export class AdministrasiRoutingModule{}