
import { Component,OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Http, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { AdmAccountBank } from '../../services/admaccountbank.servive';

@Component({
    templateUrl:'accountbank.component.html'
})
export class AccountBankComponent implements OnInit{
    
    data: LocalDataSource;
    constructor(private admAccountBank : AdmAccountBank, private http: Http) { 
        this.data = new LocalDataSource()
    }

    ngOnInit(){
        this.admAccountBank.getAccountBankList().subscribe(response=>{
            this.data.load(response);
          }
            ,error=>{alert("error")}
        ) 
    }
    addRecord(event) {
      console.log(event);
      let param = "?nama_bank=" + event.newData.nama_bank;
      console.log(param)
      this.admAccountBank.addAccountBank(param).subscribe(response => {
        event.confirm.resolve(event.newData)  
      }, error => {
        alert(error.errorMessage)
      })
    }

    editData(event){
      console.log(event);
       let param = "?id=" + event.newData.id + "&nama_bank=" + event.newData.nama_bank;
       console.log(param)
       this.admAccountBank.editAccountBank(param).subscribe(response => {
         event.confirm.resolve(event.newData)  
       }, error => {
         alert(error.errorMessage)
       }) 
    }

    deleteRecord(event){
      console.log(event);
       let param = "?id=" + event.data.id+ "&nama_bank=" + event.data.nama_bank;
       console.log(param)
       this.admAccountBank.deleteAccountBank(param).subscribe(response => {
         event.confirm.resolve();
       }, error => {
         alert(error.errorMessage)
       }) 
    }

    cek(){
      console.log(this.data)
    }
    
      settings = {
        "columns": {
          "nama_bank": {
            "title": "Nama Bank"
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