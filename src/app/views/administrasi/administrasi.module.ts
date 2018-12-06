import { NgModule } from '@angular/core';

import { Ng2SmartTableModule } from "ng2-smart-table";
import { AdministrasiRoutingModule } from './administrasi-routing.module';
import { AccountBankComponent } from './accountbank.component';
import { LiburComponent } from './libur.component';
import { JabatanComponent } from './jabatan.component';
import { RoleComponent } from './role.component';
import { StatusComponent } from './status.component';

import { TypeEmployeeComponent } from './typeemployee.component';
import { ReimbursementTypeComponent } from './reimbursementtype.component';

@NgModule({
    imports:[
        AdministrasiRoutingModule,
        Ng2SmartTableModule,
    ],
    declarations:[ 
        AccountBankComponent,
        JabatanComponent,
        LiburComponent,
        RoleComponent,
        ReimbursementTypeComponent,
        StatusComponent,
        TypeEmployeeComponent
        
    ]
})
export class AdministrasiModule{}