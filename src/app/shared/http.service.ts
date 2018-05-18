import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class HTTPService {

    // rootContext = 'https://apbi.com.au/inspector-app/';
    // rootContext = 'http://34.251.200.88:8080/inspector-app/';
    rootContext = 'http://localhost/static/';

    // appStatusUrl = this.rootContext + 'cpLiveApp';
    appStatusUrl = this.rootContext + 'cpLiveApp.json';
    // calendarFeedUrl = this.rootContext + 'cpBookingCalendarFeedApp';
    calendarFeedUrl = this.rootContext + 'cpBookingCalendarFeedApp.json';
    // inspDtlPreviewUrl = this.rootContext + 'cpInspectionDetailsApp';
    inspDtlPreviewUrl = this.rootContext + 'cpInspectionDetailsApp.html';
    // inspDtlFormUrl = this.rootContext + 'cpLoadFormDataAppv2';
    inspDtlFormUrl = this.rootContext + 'cpLoadFormDataAppv2.json';
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
        let currURL = this.inspDtlPreviewUrl + "?id=" + id + "&time=" + new Date().getTime();
        return this.http.get(currURL, { responseType: 'text' });
    }

    loadInspectionDtlForm() {
        let currURL = this.inspDtlFormUrl + "?time=" + new Date().getTime();
        return this.http.get(currURL);
    }

    addReport(postObj) {
        console.log("before post - postObj " + JSON.stringify(postObj));

        let currURL = this.addReportUrl + "?time=" + new Date().getTime();
        return this.http.post(currURL, postObj, this.httpOptions);
    }
}