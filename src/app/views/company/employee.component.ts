import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { LocalDataSource } from 'ng2-smart-table';
import { Hero } from "./jabatan";

import { FormBuilder, Validators, FormGroup, FormControl  } from '@angular/forms';  


@Component({
  templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit{
 
  form = new FormGroup({
    firstName: new FormControl('Nancy'),
    lastName: new FormControl('Nancy2'),

  })
  
  
  get firstName(): any { return this.form.get('first'); }


  data:LocalDataSource;
  constructor(private employeeService: EmployeeService) {
    this.data = new LocalDataSource();
   }


   onSubmit() {
    console.warn(this.form.value);
  }

   ngOnInit(){
    this.employeeService.getEmployeeUserList().subscribe(response=>{
          this.data.load(response);
       },error=>{alert("error")}
    ),

    this.employeeService.getJabatanList().subscribe(response=>{
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
