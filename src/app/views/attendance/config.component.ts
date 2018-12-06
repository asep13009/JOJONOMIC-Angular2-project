import { Component, OnInit } from '@angular/core';
import { AttendanceConfigService } from "../../services/attconfig.service";
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  templateUrl: 'config.component.html'
})
export class AttConfigComponent implements OnInit{

  data:LocalDataSource;
  constructor(private attendanceConfigService: AttendanceConfigService) {
    this.data = new LocalDataSource()
   }
   ngOnInit(){
    this.attendanceConfigService.getAttendanceConfigList().subscribe(response=>{
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
