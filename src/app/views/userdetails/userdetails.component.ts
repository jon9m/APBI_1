import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
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

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sidebarMinimizerHandler();
  }

  constructor(private loginService: LoginService) {
    this.loginResponse = new LoginResponse();
  }

  ngOnInit() {
    this.loginResponse = this.loginService.getLoginResponse();
  }

  ngAfterViewInit(): void {
    this.sidebarMinimizerHandler();
  }

  private sidebarMinimizerHandler() {
    var minimizerElem = <HTMLElement>document.querySelector("button[class='sidebar-minimizer']");
    if (minimizerElem) {
      let sidebarWidth = minimizerElem.offsetWidth;
      this.isDisplayed = ((sidebarWidth > 50) ? true : false);
      minimizerElem.addEventListener("click", (event: Event) => {
        this.isDisplayed = !this.isDisplayed;
      });
    }
  }
}