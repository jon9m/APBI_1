import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionDtlFormComponent } from './inspection-dtl-form.component';
import { InspectionDetailsFormRoutingModule } from "./inspection-dtl-form-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FileUploadService } from '../../shared/fileupload.service';
import { FileUploadComponentComponent } from "../file-upload-component/file-upload-component.component";
import { RefreshGuard } from "./refresh-guard.service";

@NgModule({
  imports: [
    CommonModule,
    InspectionDetailsFormRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InspectionDtlFormComponent, FileUploadComponentComponent],
  providers: [FileUploadService, RefreshGuard]
})
export class InspectionDtlFormModule { }
