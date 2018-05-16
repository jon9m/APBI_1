import { Component, OnInit } from '@angular/core';
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

  public detailsModal: InspectionDetails;

  constructor(private router: Router, private httpSevice: HTTPService, private inspectionDetailsService: InspectionDetailsService) { }

  ngOnInit() {
  }

  loadForm() {
    this.httpSevice.loadInspectionDtlForm().subscribe(
      (response: Response) => {
        //this.inspectionDetailsService.populateInspectionDetailsModel(response); - todo need a modal?

        console.log(response);
        console.log(JSON.stringify(response));

        let element: HTMLElement = document.getElementById('modalclosebutton') as HTMLElement;
        let bookingidelement: HTMLInputElement = document.getElementById('previewbookingid') as HTMLInputElement;
        
        element.click();
        this.router.navigate(['/inspectiondtlform', bookingidelement.value]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}