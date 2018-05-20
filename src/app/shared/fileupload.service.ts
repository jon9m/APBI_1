import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { AppSettings } from "./app-settings";


@Injectable()
export class FileUploadService {
    rootContext = AppSettings.API_ENDPOINT;
    baseURL = this.rootContext + 'cpUploadImageApp';

    constructor(private http: HttpClient) { }

    fileUpload(fileItem: File, extraData?: object): any {
        let apiCreateEndpoint = this.baseURL;
        const formData: FormData = new FormData();

        formData.append('fileItem', fileItem, fileItem.name);
        if (extraData) {
            for (let key in extraData) {
                // iterate and set other form data
                formData.append(key, extraData[key]);
            }
        }

        const req = new HttpRequest('POST', apiCreateEndpoint, formData, {
            reportProgress: true // for progress data
        });
        return this.http.request(req);
    }
}