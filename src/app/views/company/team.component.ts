import { Component,OnInit } from '@angular/core';
import { TeamService } from "../../services/team.service";
import { LocalDataSource } from 'ng2-smart-table';
import { Router, NavigationEnd } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'team.component.html'
})
export class TeamComponent implements OnInit{
    public myModal;
    public largeModal;

  data: LocalDataSource;
    constructor(private teamService: TeamService) { 
      this.data = new LocalDataSource()
    }

  ngOnInit(){
    this.teamService.getTeamUserList().subscribe(response=>{
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
      edit:false,
      delete:false
    },
      columns: {

        id: {
        
          title: 'ID',
          editable: false,
        },
        name: {
          title: 'Team'
          
        },
        username: {
          title: 'Create Date'
        },
        email: {
          title: 'Update Date'
        }
      },
      mode: 'inline',
      confirmSave: true,
      confirmDelete:true
    };

}
