import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionDtlFormComponent } from './inspection-dtl-form.component';
import { InspectionDetailsFormRoutingModule } from "./inspection-dtl-form-routing.module";

@NgModule({
  imports: [
    CommonModule,
    InspectionDetailsFormRoutingModule
  ],
  declarations: [InspectionDtlFormComponent]
})
export class InspectionDtlFormModule { }
