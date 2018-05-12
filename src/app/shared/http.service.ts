import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HTTPService {

    // appStatusUrl = 'https://apbi.com.au/inspector-app/cpLiveApp'; //TODO
    appStatusUrl = 'http://localhost/static/json.json'; //TODO
    // calendarFeedUrl = 'https://apbi.com.au/inspector-app/cpBookingCalendarFeedApp';
    calendarFeedUrl = 'http://localhost/static/cpBookingCalendarFeedApp.json';

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

    getEvents() {
        let currURL = this.calendarFeedUrl + "?time=" + new Date().getTime();
        return this.http.get(currURL);
    }
}