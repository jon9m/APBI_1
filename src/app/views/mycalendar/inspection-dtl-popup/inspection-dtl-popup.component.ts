import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from "@angular/router";
import { HTTPService } from "../../../shared/http.service";
import { InspectionDetails } from "../../../shared/inspection_details.model";
import { InspectionDetailsService } from "../../../shared/inspection-detail.service";


@Component({
  selector: 'app-inspection-dtl-popup',
  templateUrl: './inspection-dtl-popup.component.html',
  styleUrls: ['./inspection-dtl-popup.component.scss']
})
export class InspectionDtlPopupComponent implements OnInit {

  @ViewChild('modalclosebutton') closeButton: ElementRef;

  public detailsModal: InspectionDetails;

  constructor(private router: Router, private httpSevice: HTTPService, private inspectionDetailsService: InspectionDetailsService) { }

  ngOnInit() {
  }

  loadForm() {
    this.httpSevice.loadInspectionDtlForm().subscribe(
      (response: Response) => {
        this.inspectionDetailsService.populateInspectionDetailsModel(response);

        let bookingidelement: HTMLInputElement = document.getElementById('previewbookingid') as HTMLInputElement;
        let btnElem = this.closeButton.nativeElement as HTMLElement;
        btnElem.click();

        this.router.navigate(['/inspectiondtlform', bookingidelement.value]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}