import { Component, OnInit } from '@angular/core';
import { ExpenseCategoryService } from "../../services/expensecategory.service";
import { LocalDataSource } from 'ng2-smart-table';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'expensecategory.component.html'
})
export class ExpenseCategoryComponent implements OnInit{
  data: LocalDataSource;
    constructor(private admService : ExpenseCategoryService, private http: Http) { 
        this.data = new LocalDataSource()
    }

    ngOnInit(){
        this.admService.getExpenseCategoryUserList().subscribe(response=>{
            this.data.load(response);
          }
            ,error=>{alert("error")}
        ) 
    }
    addRecord(event) {
      console.log(event);
      let param = "?nama_expense=" + event.newData.namaExpense + "&budget_maks=" + event.newData.budgetMaks + "&maks_transaksi=" + event.newData.maksTransaksi + "&idtipepengajuan=" + event.newData.idTipePengajuan ;
      console.log(param)
      this.admService.addExpenseCategory(param).subscribe(response => {
        event.confirm.resolve(event.newData)  
      }, error => {
        alert(error.errorMessage)
      })
      
    }

    editData(event){
      console.log(event);
      
      let param = "?id=" + event.newData.id + "&nama_expense=" + event.newData.namaExpense + "&budget_maks=" + event.newData.budgetMaks + "&maks_transaksi=" + event.newData.maksTransaksi + "&idtipepengajuan=" + event.newData.idTipePengajuan ;
       console.log(param)
       this.admService.editExpenseCategory(param).subscribe(response => {
         event.confirm.resolve(event.newData)  
       }, error => {
         alert(error.errorMessage)
       }) 

    }

    deleteRecord(event){
      console.log(event);
      let param = "?id=" + event.data.id+ "&nama_expense=" + event.data.namaExpense;
       console.log(param)
       this.admService.deleteExpenseCategory(param).subscribe(response => {
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
          "namaExpense": {
            "title": "Expense Category",
          },
          "budgetMaks": {
            "title": "Budget Maksimum",
          },
          "maksTransaksi" :{
            "title" : "Transaction Maksimum",
          },
          "idTipePengajuan" :{
            "title" : "Id pengajuan",
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
