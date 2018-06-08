export class FileUploadInfo {
    public progress: number;
    public progressColor: string;

    constructor(public fileId: string, public realName: string) {
        this.realName = realName;
        this.progress = 0;
    }
}