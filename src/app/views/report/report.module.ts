import { NgModule } from "@angular/core";
import { ReportRoutingModule } from "./report-routing.module";
import { ReportCashadvanceComponent } from "./reportcashadvance.component";
import { ReportReimbursementComponent } from "./reportreimbursement.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { PopoverModule } from "ngx-bootstrap/popover";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CardsComponent } from "../base/cards.component";
import { FormsComponent } from "../base/forms.component";
import { SwitchesComponent } from "../base/switches.component";
import { TablesComponent } from "../base/tables.component";
import { TabsComponent } from "../base/tabs.component";
import { CarouselsComponent } from "../base/carousels.component";
import { CollapsesComponent } from "../base/collapses.component";
import { PaginationsComponent } from "../base/paginations.component";
import { PopoversComponent } from "../base/popovers.component";
import { ProgressComponent } from "../base/progress.component";
import { TooltipsComponent } from "../base/tooltips.component";
import { ReportAttendanceComponent } from "./reportattendance.component";

@NgModule({
    imports:[
        ReportRoutingModule,
        CommonModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        TabsModule,
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
        PaginationModule.forRoot(),
        PopoverModule.forRoot(),
        ProgressbarModule.forRoot(),
        TooltipModule.forRoot()
    ],
    declarations:[
        ReportCashadvanceComponent,
        ReportReimbursementComponent,
        ReportAttendanceComponent
    ]
})
export class ReportModule{}