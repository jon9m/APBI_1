import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppGlobal } from "./app-global";

@Injectable()
export class HTTPService {
    rootContext = AppGlobal.API_ENDPOINT;

    appStatusUrl = this.rootContext + 'cpLiveApp';
    calendarFeedUrl = this.rootContext + 'cpBookingCalendarFeedApp';
    inspDtlPreviewUrl = this.rootContext + 'cpInspectionDetailsAppv2';
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