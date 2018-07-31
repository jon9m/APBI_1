import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionDtlFormComponent } from './inspection-dtl-form.component';
import { InspectionDetailsFormRoutingModule } from "./inspection-dtl-form-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FileUploadService } from '../../shared/fileupload.service';
import { FileUploadComponentComponent } from "../file-upload-component/file-upload-component.component";
import { RefreshGuard } from "./refresh-guard.service";
import { InspDtlFormSavePopupComponent } from './insp-dtl-form-save-popup/insp-dtl-form-save-popup.component';
import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  imports: [
    CommonModule,
    InspectionDetailsFormRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [InspectionDtlFormComponent, FileUploadComponentComponent, InspDtlFormSavePopupComponent],
  providers: [FileUploadService, RefreshGuard]
})
export class InspectionDtlFormModule { }
