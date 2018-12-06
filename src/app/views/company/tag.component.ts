import { Component, OnInit } from '@angular/core';
import { TagService } from "../../services/tag.service";
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  templateUrl: 'tag.component.html'
})
export class TagComponent implements OnInit{

  data:LocalDataSource;
  constructor(private tagService: TagService) {
    this.data = new LocalDataSource()
   }
   ngOnInit(){
    this.tagService.getTagUserList().subscribe(response=>{
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
