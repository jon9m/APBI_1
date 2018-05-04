import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DataStorageService } from "../../../shared/data-service";


@Component({
  selector: 'app-inspection-dtl-popup',
  templateUrl: './inspection-dtl-popup.component.html',
  styleUrls: ['./inspection-dtl-popup.component.scss']
})
export class InspectionDtlPopupComponent implements OnInit {

  summary: String = "Default Summary";
  public detailsModal;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.dataChanged.subscribe(
      (nextsummary: String) => {
        this.summary = nextsummary;
      }
    );

    this.initLoadSummary();
  }

  initLoadSummary() {
    setInterval(() => {
      this.dataStorageService.getSummary();
    }, 3000);
  }


}
