import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttClaimerComponent } from './claimer.component';
import { AttMonitorComponent } from './monitor.component';
import { AttConfigComponent } from './config.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Attendance'
    },
    children: [
      {
        path: 'attendanceclaimer',
        component: AttClaimerComponent,
        data:{
          title: 'Claimer'
        }
      },
      {
        path: 'attendancemonitor',
        component: AttMonitorComponent,
        data:{
          title: 'Monitor'
        }
      },
      {
        path: 'attendanceconfig',
        component: AttConfigComponent,
        data:{
          title: 'Config'
        }
      },

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule {}
