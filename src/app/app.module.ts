// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ForgotPassComponent } from "./views/forgotpass/forgotpass.component";

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {

  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular'

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DataTableModule } from 'angular2-datatable/lib/DataTableModule';
import { AdvAprService } from "./services/advapproper.service";
import { UrlService } from "./services/url.service";
import { TeamService } from "./services/team.service";
import { EmployeeService } from "./services/employee.service";
import { AdvClaimerService } from './services/advclaimer.service';

import { TagService } from "./services/tag.service";
import { AdvFinanceService } from './services/advfinance.service';
import { AdvVerificatorService } from './services/advverificator.service';
import { ReimbursementClaimerService } from "./services/reimbursementclaimer.service";
import { ReimbursementApproverService } from './services/reimbursementapprover.service';
import { ReimbursementFinanceService } from './services/reimbursementfinance.service';

import {FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AttendanceClaimerService } from './services/attclaimer.service';
import { AttendanceConfigService } from "./services/attconfig.service";
import { AttendanceMonitorService } from "./services/attmonitor.service";
import { AdmPositionService } from "./services/admposition.service";
import { AdmRoleService } from "./services/admrole.service";
import { AdmAccountBank } from './services/admaccountbank.servive';
import { AdmStatusService } from './services/admstatus.service';
import { AdmTypeEmployee } from './services/admtypeemployee';
import { AdmReimbursementTypeService } from './services/admreimbursementtype.service';
import { ReimbursementTypeComponent } from './views/administrasi/reimbursementtype.component';
import { ExpenseCategoryService } from './services/expensecategory.service';

// import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

// import { MatNativeDateModule, MatDatepickerModule } from '@angular/material';
// import {FormsModule} from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

// import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
  imports: [
    // BsDatepickerModule.forRoot(),
    // FormsModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // AngularDateTimePickerModule, 
    // NgDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    // DataTableModule,
    CommonModule,
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    BrowserAnimationsModule,
    HttpModule,
  ],
  declarations: [
    
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    ForgotPassComponent,
  ],

  providers:[
    
    
    UrlService,
    TeamService,
    ExpenseCategoryService,

    AttendanceClaimerService,
    AttendanceConfigService,
    AttendanceMonitorService,

    EmployeeService,
    TagService,

    AdvAprService,
    AdvClaimerService,
    AdvFinanceService,
    AdvVerificatorService,

    ReimbursementClaimerService,
    ReimbursementApproverService,
    ReimbursementFinanceService,

    AdmPositionService,
    AdmRoleService,
    AdmReimbursementTypeService,
    AdmTypeEmployee,
    AdmStatusService,
    AdmAccountBank,

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }