import { Component,OnInit } from '@angular/core';
import { AdvAprService } from "../../services/advapproper.service";
import { LocalDataSource } from 'ng2-smart-table';


@Component({
    templateUrl:'approver.component.html'
})
export class ApproverComponent implements OnInit{
    // data:any=[];
    data: LocalDataSource;
    
    constructor(private advApproverService: AdvAprService) { 
      this.data = new LocalDataSource()
    }
    ngOnInit(){
      this.advApproverService.getAdvApproveUserList().subscribe(response=>{
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

      // data = [
      //   {
      //     id: 1,
      //     name: "Leanne Graham",
      //     username: "Bret",
      //     email: "Sincere@april.biz"
      //   },
      //   {
      //     id: 2,
      //     name: "Ervin Howell",
      //     username: "Antonette",
      //     email: "Shanna@melissa.tv"
      //   },
        
      //   // ... list of items
        
      //   {
      //     id: 11,
      //     name: "Nicholas DuBuque",
      //     username: "Nicholas.Stanton",
      //     email: "Rey.Padberg@rosamond.biz"
      //   }
      // ];
}