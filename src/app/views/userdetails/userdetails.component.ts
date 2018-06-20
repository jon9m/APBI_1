import { Component, OnInit, ViewChild, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { LoginResponse } from '../../shared/login.response.model';
import { LoginService } from '../../shared/login.service';
import { AppGlobal } from '../../shared/app-global';
import { AppUtils } from "../../shared/app-utils";
import { Observable, Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit, AfterViewInit, OnDestroy {

  loginResponse: LoginResponse;
  avatarURL = AppGlobal.USER_AVATAR_URL;
  // isDisplayed: boolean = AppUtils.isDisplayed;

  resizeId;
  resizeSubscription: Subscription;

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   clearTimeout(this.resizeId);
  //   this.resizeId = setTimeout(() => {
  //     AppUtils.sidebarMinimizerHandler();
  //   }, 500);
  // }
  @HostListener('window:orientationchange', ['$event'])
  onorientationchange(event) {
    console.log("orientation");
    AppUtils.sidebarMinimizerHandler();
  }

  constructor(private loginService: LoginService) {
    this.loginResponse = new LoginResponse();

    this.resizeSubscription = Observable.fromEvent(window, 'resize')
      .debounceTime(600)
      .subscribe((event) => {
        console.log("resizing done !!!!!");
        AppUtils.sidebarMinimizerHandler();
      });
  }

  ngOnInit() {
    this.loginResponse = this.loginService.getLoginResponse();
  }

  ngOnDestroy(): void {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    AppUtils.sidebarMinimizerHandler();
  }

  getDisplayed() {
    return AppUtils.isDisplayed;
  }
}