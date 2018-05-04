import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class DataStorageService {

    dataChanged: Subject<String> = new Subject();

    constructor() { }

    getSummary() {
        this.dataChanged.next("Summary " + Math.random());
    }
}