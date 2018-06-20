export class FileUploadInfo {
    public progress: number;
    public progressColor: string;
    public isImageResizing: boolean;

    constructor(public fileId: string, public realName: string) {
        this.realName = realName;
        this.progress = 0;
    }
}