import { Injectable } from "@angular/core";

@Injectable()
export class AppServeiceLoadStatusService {
    constructor() {}

    //Calendar API service chcek
    public calendarLoadStatus: boolean = false;
    public clearCalendarLoadStatus() {
        this.calendarLoadStatus = false;
    }
    public setCalendarLoadStatus() {
        this.calendarLoadStatus = true;
    }
    public getCalendarLoadStatus() {
        return this.calendarLoadStatus;
    }
}