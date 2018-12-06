import { Component, OnInit } from '@angular/core';
import { ReimbursementClaimerService } from "../../services/reimbursementclaimer.service";
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  templateUrl: 'claimer.component.html'
})
export class ClaimerComponent implements OnInit{

  data:LocalDataSource;
  constructor(private reimbursementClaimerService: ReimbursementClaimerService) {
    this.data = new LocalDataSource()
   }
   ngOnInit(){
    this.reimbursementClaimerService.getReimbursementClaimerUserList().subscribe(response=>{
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
      add:false,
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
