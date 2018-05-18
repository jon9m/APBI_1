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
        let responseInspectionDetails = responseJSON;

        console.log("--------------------response directly from API----------------------------");
        console.log(responseInspectionDetails);

        //Assign all values to the modal
        Object.assign(this.inspectionDetails, responseInspectionDetails);

        console.log("--------------------After assign----------------------------");
        console.log(this.inspectionDetails);
    }

    getInspectionDetailsModal() {
        return this.inspectionDetails;
    }
}