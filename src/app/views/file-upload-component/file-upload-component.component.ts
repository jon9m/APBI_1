import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormArray, AbstractControl } from "@angular/forms";
import { FileUploadService } from "../../shared/fileupload.service";
import { HttpEventType } from "@angular/common/http";
import { AppGlobal } from '../../shared/app-global';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-file-upload-component',
  templateUrl: './file-upload-component.component.html',
  styleUrls: ['./file-upload-component.component.scss']
})
export class FileUploadComponentComponent implements OnInit {

  ngOnInit() {
    let file_name = (this.fileName) ? this.fileName : this.getFileName();
    this.imagePreview.nativeElement.src = AppGlobal.API_ENDPOINT + AppGlobal.IMG_PREVIEW_ACTION + "?src=" + file_name + "&reportId=" + this.reportId + "&" + new Date().getTime();
  }

  @Input() index: any;
  @Input() recommendationType: any;
  @Input() fileName: any;
  @Input() reportId: any;
  @Input() progress: any;
  @Input() inspectiondetailsform: FormGroup;

  @ViewChild("imgPreview") imagePreview: ElementRef;

  fileUploadSub: any;
  uploadingProgressing: boolean = false;
  uploadProgress: number = 0;
  uploadComplete: boolean = false;
  serverResponse: any;
  rgbString: string = '#20a8d8';
  file_name = "";

  currInputElemProgress: any;

  constructor(private fileUploadService: FileUploadService, private ng2ImgMax: Ng2ImgMaxService) {

  }

  getFileName() {
    let file_name;
    let currFormArr = (<FormArray>(this.inspectiondetailsform.get(this.recommendationType)));
    if (currFormArr) {
      let currFrmGrp = (<FormGroup>(currFormArr.at(this.index)));
      if (currFrmGrp) {
        let fileNameCtrl = (<AbstractControl>currFrmGrp.controls['filename']);
        if (fileNameCtrl) {
          file_name = fileNameCtrl.value;
        }
      }
    }
    return file_name;
  }

  onFileChange(event) {

    console.log("On file change");
    this.uploadProgress = 0;

    //console.log((<FormGroup>(<FormArray>this.inspectiondetailsform.get(recommendationType)).at(index)).controls['filename'].value);  //controlName

    if (this.fileName) {
      this.file_name = this.fileName;
    } else {
      this.file_name = this.getFileName();
      console.log(this.file_name);
    }

    let bookingId = this.inspectiondetailsform.get('bookingid').value;
    let submittedData = { 'index': this.index, 'type': this.recommendationType, 'bookingid': bookingId };
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let fileToUpload = event.target.files[0];
      reader.readAsDataURL(fileToUpload);
      reader.onload = (event) => {
        let progressId = "#" + this.progress + "-" + this.index;
        let elem = (<HTMLImageElement>document.querySelector(progressId));
        if (elem) {
          elem.src = (<FileReader>event.target).result;
        }

        //file resizing
        this.ng2ImgMax.resizeImage(fileToUpload, AppGlobal.UPLOAD_IMG_WIDTH, AppGlobal.UPLOAD_IMG_HEIGHT).subscribe(
          (result) => {
            fileToUpload = new File([result], result.name);
            console.log("Image resizing successful " + fileToUpload);
            this.uploadCurrentFile(fileToUpload, submittedData);
          },
          (error) => {
            console.log('Image resizing failed, using original image', error);
            this.uploadCurrentFile(fileToUpload, submittedData);
          }
        );
        //file resizing ends
      };
    }
  }

  private uploadCurrentFile(fileToUpload, submittedData) {
    this.fileUploadSub = this.fileUploadService.fileUpload(fileToUpload, this.file_name, submittedData).subscribe(
      event => {
        this.handleProgress(event, this.index, this.recommendationType);
      },
      error => {
        console.log("Server error"); //TODO - error handle
      });
  }

  handleProgress(event, index, recommendationType) {

    if (event.type === HttpEventType.Sent) {
      this.uploadProgress = 0;
      this.rgbString = '#20a8d8';
    }

    if (event.type === HttpEventType.DownloadProgress) {
      this.uploadingProgressing = true
      this.uploadProgress = Math.round(100 * event.loaded / event.total);
    }

    if (event.type === HttpEventType.UploadProgress) {
      this.currInputElemProgress = recommendationType + "_progress_" + index;

      this.uploadingProgressing = true
      this.uploadProgress = Math.round(event.loaded / event.total * 100);

      this.setRgbString();
    }

    if (event.type === HttpEventType.Response) {
      // console.log(event.body);
      this.uploadComplete = true
      this.serverResponse = event.body
      this.uploadProgress = 100;
    }
  }

  resetAll() {
    this.uploadProgress = 0;
  }

  setRgbString() {
    let colorMul = 255 / 100;
    //#20a8d8 - 32, 168 , 216
    let maxG = 168;
    let maxGMul = maxG / 100;
    let maxB = 216;
    let maxBMul = maxB / 100;
    let minR = 32;
    let minRMul = minR / 100;

    let hexR = Math.round(colorMul * (100 - this.uploadProgress) + ((this.uploadProgress > 68) ? this.uploadProgress * minRMul : 0));
    let hexG = Math.round(maxGMul * this.uploadProgress);
    let hexB = Math.round(maxBMul * (this.uploadProgress));

    let strR = hexR.toString(16);
    let strG = hexG.toString(16);
    let strB = hexB.toString(16);

    this.rgbString = "#" + strR + strG + strB;
  }
}