import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionDtlFormComponent } from './inspection-dtl-form.component';
import { InspectionDetailsFormRoutingModule } from "./inspection-dtl-form-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FileUploadService } from '../../shared/fileupload.service';

@NgModule({
  imports: [
    CommonModule,
    InspectionDetailsFormRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InspectionDtlFormComponent],
  providers: [FileUploadService]
})
export class InspectionDtlFormModule { }
