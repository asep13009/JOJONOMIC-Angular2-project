
import { Component,OnInit } from '@angular/core';
import { AdvClaimerService } from "../../services/advclaimer.service";
import { LocalDataSource } from 'ng2-smart-table';

import { Http, Response } from '@angular/http';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
    templateUrl:'claimer.component.html'
})
export class ClaimerComponent implements OnInit{
   

    
    data: LocalDataSource;
    constructor(private advCService : AdvClaimerService, private http: Http) { 
        this.data = new LocalDataSource()
    }

    ngOnInit(){
        this.advCService.getAdvClaimerList().subscribe(response=>{
            this.data.load(response);
          }
            ,error=>{alert("error")}
          
        ) 
    }
    

    addRecord(event) {
      console.log(event);
      let param = "?nama_jabatan=" + event.newData.nama_jabatan;
      console.log(param)
      this.advCService.addAdvClaimer(param).subscribe(response => {
        event.confirm.resolve(event.newData)  
      }, error => {
        alert(error.errorMessage)
      })
      
    }

    editData(event){
      console.log(event);
       let param = "?id=" + event.newData.id + "&nama_jabatan=" + event.newData.nama_jabatan;
       console.log(param)
       this.advCService.editAdvClaimer(param).subscribe(response => {
         event.confirm.resolve(event.newData)  
       }, error => {
         alert(error.errorMessage)
       }) 

    }

    deleteRecord(event){
      console.log(event);
       let param = "?id=" + event.data.id+ "&nama_jabatan=" + event.data.nama_jabatan;
       console.log(param)
       this.advCService.deleteAdvClaimer(param).subscribe(response => {
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
          "nama_jabatan": {
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