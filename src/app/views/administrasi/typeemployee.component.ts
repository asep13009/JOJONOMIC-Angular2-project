
import { Component,OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { Http, Response } from '@angular/http';

import { HttpErrorResponse } from '@angular/common/http';
import { AdmTypeEmployee } from '../../services/admtypeemployee';

@Component({
    templateUrl:'typeemployee.component.html'
})
export class TypeEmployeeComponent implements OnInit{
    

    
    data: LocalDataSource;
    constructor(private advCService : AdmTypeEmployee, private http: Http) { 
        this.data = new LocalDataSource()
    }

    ngOnInit(){
        this.advCService.getAdmTypeEmployeeList().subscribe(response=>{
            this.data.load(response);
          }
            ,error=>{alert("error")}
          
        ) 
    }
    

    addRecord(event) {
      console.log(event);
      let param = "?nama_tipekaryawan=" + event.newData.nama_typekaryawan;
      console.log(param)
      this.advCService.addAdmTypeEmployee(param).subscribe(response => {
        event.confirm.resolve(event.newData)  
      }, error => {
        alert(error.errorMessage)
      })
      
    }

    editData(event){
      console.log(event);
       let param = "?id=" + event.newData.id + "&nama_tipekaryawan=" + event.newData.nama_typekaryawan;
       console.log(param)
       this.advCService.editAdmTypeEmployee(param).subscribe(response => {
         event.confirm.resolve(event.newData)  
       }, error => {
         alert(error.errorMessage)
       }) 

    }

    deleteRecord(event){
      console.log(event);
       let param = "?id=" + event.data.id+ "&nama_tipekaryawan=" + event.data.nama_typekaryawan;
       console.log(param)
       this.advCService.deleteAdmTypeEmployee(param).subscribe(response => {
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
          "nama_typekaryawan": {
            "title": "Nama Jabatan"
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