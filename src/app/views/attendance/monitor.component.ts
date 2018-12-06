import { Component, OnInit } from '@angular/core';
import { AttendanceMonitorService } from "../../services/attmonitor.service";
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  templateUrl: 'monitor.component.html'
})
export class AttMonitorComponent implements OnInit{

  data:LocalDataSource;
  constructor(private attendanceMonitorService: AttendanceMonitorService) {
    this.data = new LocalDataSource()
   }
   ngOnInit(){
    this.attendanceMonitorService.getAttendanceMonitorList().subscribe(response=>{
      this.data.load(response);
    },error=>{alert("error")}
    )
   }

   editData(e?){
    console.log(e);
    console.log(this.data)
  }

  deleteConfirm(e?){
    console.log(e.data);
    this.data.remove(e.data)
  }
  
  settings = {
      columns: {
        id: {
          title: 'ID',
          editable: false,
        },
        name: {
          title: 'Full Name'
          
        },
        username: {
          title: 'User Name'
        },
        email: {
          title: 'Email'
        }
      },
      mode: 'inline',
      confirmSave: true,
      confirmDelete:true
    };


}
