import { Component,OnInit } from '@angular/core';
import { AdvFinanceService } from "../../services/advfinance.service";
import { LocalDataSource } from 'ng2-smart-table';


@Component({
    templateUrl:'finance.component.html'
})
export class FinanceComponent implements OnInit{
    data: LocalDataSource;
    constructor(private advFinanceService : AdvFinanceService) { 
        this.data = new LocalDataSource()
    }

    ngOnInit(){
        this.advFinanceService.getAdvFinanceList().subscribe(response=>{
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
        actions:{
          edit:false
        },
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