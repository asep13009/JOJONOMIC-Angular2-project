// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AttClaimerComponent } from './claimer.component';
import { AttConfigComponent } from './config.component';
import { AttMonitorComponent } from './monitor.component';


@NgModule({
  imports: [
    AttendanceRoutingModule,
    Ng2SmartTableModule
   
  ],
  declarations: [
    AttClaimerComponent,
    AttConfigComponent,
    AttMonitorComponent
  ]
})
export class AttendanceModule { }
