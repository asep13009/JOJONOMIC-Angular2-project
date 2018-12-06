import { Component, OnInit } from '@angular/core';
import { ReimbursementApproverService } from "../../services/reimbursementapprover.service";
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  templateUrl: 'approver.component.html'
})
export class ApproverComponent implements OnInit{

  data:LocalDataSource;
  constructor(private reimbursementApproverService: ReimbursementApproverService) {
    this.data = new LocalDataSource()
   }
   ngOnInit(){
    this.reimbursementApproverService.getReimbursementApproverUserList().subscribe(response=>{
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
      delete:false
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
