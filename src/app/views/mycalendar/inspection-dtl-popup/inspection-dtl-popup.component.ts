import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
  @ViewChild('completereportmsg') completeMsg: ElementRef;
  @ViewChild('completereportbutton') completeButton: ElementRef;

  public detailsModal: InspectionDetails;
  isFormLoading: boolean = false;

  constructor(private renderer: Renderer2, private router: Router, private httpSevice: HTTPService, private inspectionDetailsService: InspectionDetailsService) { }

  ngOnInit() {
  }

  loadForm() {
    this.beginFormLoading();
    this.httpSevice.loadInspectionDtlForm().subscribe(
      (response: Response) => {
        this.inspectionDetailsService.populateInspectionDetailsModel(response);

        let bookingidelement: HTMLInputElement = document.getElementById('previewbookingid') as HTMLInputElement;
        let btnElem = this.closeButton.nativeElement as HTMLElement;
        this.doneFormLoading();
        btnElem.click();

        this.router.navigate(['/inspectiondtlform', bookingidelement.value]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  beginFormLoading() {
    this.isFormLoading = true;
    let completeMsgElem = this.completeMsg.nativeElement;
    this.renderer.addClass(completeMsgElem, 'fa');
    this.renderer.addClass(completeMsgElem, 'fa-spinner');
    this.renderer.addClass(completeMsgElem, 'fa-spin');
  }

  doneFormLoading() {
    this.isFormLoading = false;
    let completeMsgElem = this.completeMsg.nativeElement;
    this.renderer.removeClass(completeMsgElem, 'fa');
    this.renderer.removeClass(completeMsgElem, 'fa-spinner');
    this.renderer.removeClass(completeMsgElem, 'fa-spin');
  }
}