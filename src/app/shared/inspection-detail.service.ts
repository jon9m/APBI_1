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
        let inspectionDetailsJson = responseJSON;

        console.log("--------------------response directly from API----------------------------");
        console.log(inspectionDetailsJson);

        //Assign all values to the modal
        Object.assign(this.inspectionDetails, inspectionDetailsJson);

        // console.log("--------------------After assign----------------------------");
        // console.log(this.inspectionDetails);
    }

    getInspectionDetailsModal() {
        return this.inspectionDetails;
    }
}