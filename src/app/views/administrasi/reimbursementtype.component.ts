
import { Component,OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Http, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { AdmReimbursementTypeService } from '../../services/admreimbursementtype.service';

@Component({
    templateUrl:'reimbursementtype.component.html'
})
export class ReimbursementTypeComponent implements OnInit{
    

    
    data: LocalDataSource;
    constructor(private admService : AdmReimbursementTypeService, private http: Http) { 
        this.data = new LocalDataSource()
    }

    ngOnInit(){
        this.admService.getAdmReimbursementTypeList().subscribe(response=>{
            this.data.load(response);
          }
            ,error=>{alert("error")}
          
        ) 
    }
     

    addRecord(event) {
      console.log(event);
      let param = "?jenis_pengajuan=" + event.newData.jenisPengajuan;
      console.log(param)
      this.admService.addAdmReimbursementType(param).subscribe(response => {
        event.confirm.resolve(event.newData)  
      }, error => {
        alert(error.errorMessage)
      })
      
    }

    editData(event){
      console.log(event);
      let param = "?id=" + event.newData.id+ "&jenis_pengajuan=" + event.newData.jenisPengajuan;
       console.log(param)
       this.admService.editAdmReimbursementType(param).subscribe(response => {
         event.confirm.resolve(event.newData)  
       }, error => {
         alert(error.errorMessage)
       }) 

    }   

    deleteRecord(event){
      console.log(event);
       let param = "?id=" + event.data.id+ "&jenis_pengajuan=" + event.data.jenisPengajuan;
       console.log(param)
       this.admService.deleteAdmReimbursementType(param).subscribe(response => {
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
          "jenisPengajuan": {
            "title": "Reimbursement Type"
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