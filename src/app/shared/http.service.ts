import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HTTPService {

    // appStatusUrl = 'https://apbi.com.au/inspector-app/cpLiveApp'; //TODO
    appStatusUrl = 'http://localhost/static/json.json'; //TODO

    constructor(private http: HttpClient) {

    }

    getAppStatus() {
        let currURL = this.appStatusUrl + "?time=" + new Date().getTime();
        return this.http.get(currURL);
    }


}