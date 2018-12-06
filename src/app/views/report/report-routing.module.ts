import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ReportReimbursementComponent } from "./reportreimbursement.component";
import { ReportCashadvanceComponent } from "./reportcashadvance.component";
import { ReportAttendanceComponent } from "./reportattendance.component";

const routes: Routes=[
    {
        path:'',
        data:{
            title: 'Report'
        },
        children:[
            {
                path:'reportreimbursement',
                component: ReportReimbursementComponent,
                data:{
                    title:'Reimbursement'
                }
            },
            {
                path:'reportcashadvance',
                component: ReportCashadvanceComponent,
                data:{
                    title:'Cash Advance'
                }
            },
            {
                path:'reportattendance',
                component: ReportAttendanceComponent,
                data:{
                    title:'Attendance'
                }
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ReportRoutingModule{}
