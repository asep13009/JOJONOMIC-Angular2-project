import { Component } from '@angular/core';

@Component({
    templateUrl:'reportreimbursement.component.html'
})
export class ReportReimbursementComponent{
    constructor() { }

    isCollapsed: boolean = true;
    isCollapsed2: boolean = true;
   iconCollapse: string = "icon-arrow-up";
   iconCollapse2: string = "icon-arrow-up";

  collapsed(event: any): void {
    // console.log(event);
  }
  collapsed2(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
  expanded2(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? "icon-arrow-down" : "icon-arrow-up";
  }

  toggleCollapse2(): void {
    this.isCollapsed2 = !this.isCollapsed2;
    this.iconCollapse2 = this.isCollapsed2 ? "icon-arrow-down" : "icon-arrow-up";
  }
}