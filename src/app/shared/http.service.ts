import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class HTTPService {

    appStatusUrl = 'https://apbi.com.au/inspector-app/cpLiveApp';
    calendarFeedUrl = 'https://apbi.com.au/inspector-app/cpBookingCalendarFeedApp';
    inspDtlPreviewUrl = 'https://apbi.com.au/inspector-app/cpInspectionDetailsApp';
    inspDtlFormUrl = 'https://apbi.com.au/inspector-app/cpLoadFormDataApp';
    addReportUrl = 'https://apbi.com.au/inspector-app/cpAddReport';


    httpOptions = {
        headers: new HttpHeaders({
            'Cache-Control': 'no-cache'
        })
    };

    constructor(private http: HttpClient) {

    }

    getAppStatus() {
        let currURL = this.appStatusUrl + "?time=" + new Date().getTime();
        return this.http.post(currURL, {}, { responseType: 'text' });
    }
    loadCalendar(postObj) {
        let currURL = this.calendarFeedUrl + "?time=" + new Date().getTime();
        return this.http.post(currURL, postObj);
    }

    getPreview(id) {
        let currURL = this.inspDtlPreviewUrl + "?id=" + id + "&mhmajax=mhm_mallahzadeh_hosseini&time=" + new Date().getTime();
        return this.http.get(currURL, { responseType: 'text' });
    }

    loadInspectionDtlForm() {
        let currURL = this.inspDtlFormUrl + "?time=" + new Date().getTime();
        return this.http.get(currURL);
    }

    addReport(postObj) {

        console.log("before post - postObj " + postObj);

        let currURL = this.addReportUrl + "?time=" + new Date().getTime();
        return this.http.post(currURL, postObj, this.httpOptions);
    }
}