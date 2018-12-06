
import { Component,OnInit } from '@angular/core';
import { AdmRoleService } from "../../services/admrole.service";
import { LocalDataSource } from 'ng2-smart-table';

import { Http, Response } from '@angular/http';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
    templateUrl:'role.component.html'
})
export class RoleComponent implements OnInit{
    

    
    data: LocalDataSource;
    constructor(private admService : AdmRoleService, private http: Http) { 
        this.data = new LocalDataSource()
    }

    ngOnInit(){
        this.admService.getAdmRoleList().subscribe(response=>{
            this.data.load(response);
          }
            ,error=>{alert("error")}
          
        ) 
    }
     

    addRecord(event) {
      console.log(event);
      let param = "?nama_role=" + event.newData.nama_role;
      console.log(param)
      this.admService.addAdmRole(param).subscribe(response => {
        event.confirm.resolve(event.newData)  
      }, error => {
        alert(error.errorMessage)
      })
      
    }

    editData(event){
      console.log(event);
      let param = "?id=" + event.newData.id+ "&nama_role=" + event.newData.nama_role;
       console.log(param)
       this.admService.editAdmRole(param).subscribe(response => {
         event.confirm.resolve(event.newData)  
       }, error => {
         alert(error.errorMessage)
       }) 

    }   

    deleteRecord(event){
      console.log(event);
       let param = "?id=" + event.data.id+ "&nama_role=" + event.data.nama_role;
       console.log(param)
       this.admService.deleteAdmRole(param).subscribe(response => {
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
          "nama_role": {
            "title": "Role"
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