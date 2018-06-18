import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { InspectionDetails } from "./inspection_details.model";
import { InspectionProperty } from './inspection-property.model';

@Injectable()
export class InspectionDetailsService {

    private inspectionProperty: InspectionProperty;
    private inspectionDetails: InspectionDetails;


    constructor() {
        this.inspectionProperty = new InspectionProperty();
        this.inspectionDetails = new InspectionDetails();
    }

    populateInspectionDetailsModel(responseJSON) {
        let inspectionDetailsJson = responseJSON;

        this.inspectionProperty.inspectionType = responseJSON.inspectionType;
        this.inspectionProperty.propertyAddress = responseJSON.propertyAddress;
        this.inspectionProperty.reportId = responseJSON.reportId;
        this.inspectionProperty.inspectionId = responseJSON.inspectionId;

        console.log("--------------------response directly from API----------------------------");
        console.log(inspectionDetailsJson);

        //Assign all values to the modal
        Object.assign(this.inspectionDetails, inspectionDetailsJson);
    }

    getInspectionDetailsModal() {
        return this.inspectionDetails;
    }

    getInspectionPropertyModal() {
        return this.inspectionProperty;
    }
}