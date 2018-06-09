import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { LoginResponse } from '../../shared/login.response.model';
import { LoginService } from '../../shared/login.service';
import { AppGlobal } from '../../shared/app-global';
import { AppUtils } from "../../shared/app-utils";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit, AfterViewInit {

  loginResponse: LoginResponse;
  avatarURL = AppGlobal.USER_AVATAR_URL;
  // isDisplayed: boolean = AppUtils.isDisplayed;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    setTimeout(() => {
      AppUtils.sidebarMinimizerHandler();
    }, 500);
  }
  @HostListener('window:orientationchange', ['$event'])
  onorientationchange(event) {
    console.log("orientation");
    AppUtils.sidebarMinimizerHandler();
  }

  constructor(private loginService: LoginService) {
    this.loginResponse = new LoginResponse();
  }

  ngOnInit() {
    this.loginResponse = this.loginService.getLoginResponse();
  }

  ngAfterViewInit(): void {
    AppUtils.sidebarMinimizerHandler();
  }

  getDisplayed() {
    return AppUtils.isDisplayed;
  }
}