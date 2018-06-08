import { Injectable } from "@angular/core";
import { FileUploadInfo } from "./fileupload-info.model";

@Injectable()
export class FileUploadProgressService {
    public fileProgressMap = new Map<String, FileUploadInfo>();

    public addMapItem(key: string, name: string): FileUploadInfo {
        let currFileInfo = new FileUploadInfo(key, name);
        this.fileProgressMap.set(key, currFileInfo);
        return currFileInfo;
    }
    public updateProgress(key: string, progress: number, progressColor: string) {
        console.log("Progress for key -" + key + "......" + progress);
        (this.fileProgressMap.get(key)).progress = progress;
        (this.fileProgressMap.get(key)).progressColor = progressColor;
    }
    getKeys() {
        return Array.from(this.fileProgressMap.keys());
    }
    getValues() {
        return Array.from(this.fileProgressMap.values());
    }
}