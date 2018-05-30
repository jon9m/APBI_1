import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginResponse } from '../../shared/login.response.model';
import { LoginService } from '../../shared/login.service';
import { AppGlobal } from '../../shared/app-global';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit, AfterViewInit {

  isDisplayed: boolean = true;
  loginResponse: LoginResponse;
  avatarURL = AppGlobal.USER_AVATAR_URL;

  constructor(private loginService: LoginService) {
    this.loginResponse = new LoginResponse();
  }

  ngOnInit() {
    this.loginResponse = this.loginService.getLoginResponse();

    console.log("user details init");
  }

  ngAfterViewInit(): void {
    //Show hide user details
    var minimizerElem = <HTMLElement>document.querySelector("button[class='sidebar-minimizer']");
    if (minimizerElem) {
      minimizerElem.addEventListener("click", (event: Event) => {
        this.isDisplayed = !this.isDisplayed;
      });
    }
  }
}