import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class AppServeiceLoadStatusService {
    constructor() { }

    //Calendar API service chcek
    public calendarLoadStatus: boolean = false;
    public calendarDisplayStatus: boolean = false;
    public calendarDisplaySubject = new Subject<boolean>();
    public calendarSearchSubject = new Subject<string>();

    public clearCalendarLoadStatus() {
        this.calendarLoadStatus = false;
    }
    public setCalendarLoadStatus() {
        this.calendarLoadStatus = true;
    }
    public getCalendarLoadStatus() {
        return this.calendarLoadStatus;
    }

    public setCalendarDisplayStatus() {
        this.calendarDisplayStatus = true;
        this.calendarDisplaySubject.next(this.calendarDisplayStatus);
    }
    public clearCalendarDisplayStatus() {
        this.calendarDisplayStatus = false;
        this.calendarDisplaySubject.next(this.calendarDisplayStatus);
    }

    public setCalendarSearchText(searchText: string) {
        this.calendarSearchSubject.next(searchText);
    }
}