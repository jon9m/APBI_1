import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from "@angular/router";
import { InspectionDetailsService } from "../../../shared/inspection-detail.service";


@Component({
  selector: 'app-inspection-dtl-popup',
  templateUrl: './inspection-dtl-popup.component.html',
  styleUrls: ['./inspection-dtl-popup.component.scss']
})
export class InspectionDtlPopupComponent implements OnInit {

  summary: String = "Default Summary";
  public detailsModal;

  constructor(private inspectionDetailsService: InspectionDetailsService, private router: Router) { }

  ngOnInit() {
    this.inspectionDetailsService.dataChanged.subscribe(
      (nextsummary: String) => {
        this.summary = nextsummary;
      }
    );

    this.initLoadSummary();
  }

  initLoadSummary() {
    setInterval(() => {
      this.inspectionDetailsService.getSummary();
    }, 3000);
  }

  loadForm() {
    let element: HTMLElement = document.getElementById('modalclosebutton') as HTMLElement;
    element.click();
    this.router.navigate(['/inspectiondtlform']);
  }

}
