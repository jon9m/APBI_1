import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { InspectionDetails } from "./inspection_details.model";

@Injectable()
export class InspectionDetailsService {

    private inspectionDetails: InspectionDetails;

    constructor() {
        this.inspectionDetails = new InspectionDetails();
    }

    populateInspectionDetailsModel(responseJSON) {
        //TODO - populate modal object from JSON
        let responseInspectionDetails = responseJSON;
        console.log(Object.keys(responseInspectionDetails).filter((name) => /inspection_findings_and_recommendations/.test(name)));


        console.log("------------------------------------------------");
        console.log(responseInspectionDetails);
        console.log("------------------------------------------------");
        console.log(this.inspectionDetails);

        Object.assign(this.inspectionDetails, responseInspectionDetails);
    }

    getInspectionDetailsModal() {
        return this.inspectionDetails;
    }
}