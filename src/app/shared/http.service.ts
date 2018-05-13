import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class HTTPService {

    // appStatusUrl = 'https://apbi.com.au/inspector-app/cpLiveApp'; //TODO
    appStatusUrl = 'http://localhost/static/json.json'; //TODO
    // calendarFeedUrl = 'https://apbi.com.au/inspector-app/cpBookingCalendarFeedApp';
    calendarFeedUrl = 'http://localhost/static/cpBookingCalendarFeedApp.json';

    // inspDtlPreviewUrl = 'https://apbi.com.au/inspector-app/cpInspectionDetailsApp';
    inspDtlPreviewUrl = 'http://localhost/static/cpInspectionDetailsApp.html';

    // inspDtlFormUrl = 'https://apbi.com.au/inspector-app/cpInspectionLoadFormApp'
    inspDtlFormUrl = 'http://localhost/static/inspectionDetails.json'

    constructor(private http: HttpClient) {

    }

    getAppStatus() {
        let currURL = this.appStatusUrl + "?time=" + new Date().getTime();
        return this.http.get(currURL);
    }

    loadCalendar(postObj) {
        let currURL = this.calendarFeedUrl + "?time=" + new Date().getTime();
        // return this.http.post(currURL, postObj);
        return this.http.get(currURL);
    }

    getEvents() { //TODO
        let currURL = this.calendarFeedUrl + "?time=" + new Date().getTime();
        return this.http.get(currURL);
    }

    getPreview(id) {
        const headers = new HttpHeaders().set("content-type", "text/html");  //TEMP
        let currURL = this.inspDtlPreviewUrl + "?id=" + id + "&time=" + new Date().getTime();
        return this.http.get(currURL,{responseType: 'text'});
    }

    loadInspectionDtlForm(){
        let currURL = this.inspDtlFormUrl + "?time=" + new Date().getTime();
        return this.http.get(currURL);        
    }
}