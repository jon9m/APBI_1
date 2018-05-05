import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-inspection-dtl-form',
  templateUrl: './inspection-dtl-form.component.html',
  styleUrls: ['./inspection-dtl-form.component.scss']
})
export class InspectionDtlFormComponent implements OnInit {

  inspectiondetailsform:FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
