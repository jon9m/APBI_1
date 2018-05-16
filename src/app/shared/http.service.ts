import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class HTTPService {

    // rootContext = 'https://apbi.com.au/inspector-app/';
    rootContext = 'http://34.251.200.88:8080/inspector-app/';

    appStatusUrl = this.rootContext + 'cpLiveApp';
    calendarFeedUrl = this.rootContext + 'cpBookingCalendarFeedApp';
    inspDtlPreviewUrl = this.rootContext + 'cpInspectionDetailsApp';
    inspDtlFormUrl = this.rootContext + 'cpLoadFormDataAppv2';
    addReportUrl = this.rootContext + 'cpAddReportv2';


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
        console.log("before post - postObj " + JSON.stringify(postObj));

        let currURL = this.addReportUrl + "?time=" + new Date().getTime();
        return this.http.post(currURL, JSON.stringify(postObj), this.httpOptions);
    }
}