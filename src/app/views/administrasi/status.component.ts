
import { Component,OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { Http, Response } from '@angular/http';

import { HttpErrorResponse } from '@angular/common/http';
import { AdmStatusService } from '../../services/admstatus.service';

@Component({
    templateUrl:'status.component.html'
})
export class StatusComponent implements OnInit{
        
    data: LocalDataSource;
    constructor(private service : AdmStatusService, private http: Http) { 
        this.data = new LocalDataSource()
    }

    ngOnInit(){
        this.service.getAdmStatusList().subscribe(response=>{
            this.data.load(response);
          }
            ,error=>{alert("error")}
          
        ) 
    }
    

    addRecord(event) {
      console.log(event);
      let param = "?nama_status=" + event.newData.namaStatus;
      console.log(param)
      this.service.addAdmStatus(param).subscribe(response => {
        event.confirm.resolve(event.newData)  
      }, error => {
        alert(error.errorMessage)
      })
      
    }

    editData(event){
      console.log(event);
       let param = "?id=" + event.newData.id + "&nama_status=" + event.newData.namaStatus;
       console.log(param)
       this.service.editAdmStatus(param).subscribe(response => {
         event.confirm.resolve(event.newData)  
       }, error => {
         alert(error.errorMessage)
       }) 

    }

    deleteRecord(event){
      console.log(event);
       let param = "?id=" + event.data.id+ "&nama_status=" + event.data.namaStatus;
       console.log(param)
       this.service.deleteAdmStatus(param).subscribe(response => {
         event.confirm.resolve();
       }, error => {
         alert(error.errorMessage)
       }) 
    }

    cek(){
      console.log(this.data)
    }
  
    
      
      settings = {
        // "actions": {
        //   "delete": false
        // },
        "columns": {
          "namaStatus": {
            "title": "Nama Status"
          }
        },
        "mode": "inline",
        add:{
          confirmCreate: true
        },
        edit:{
          confirmSave:true
        },
        delete:{
          confirmDelete:true
        }

      };
}