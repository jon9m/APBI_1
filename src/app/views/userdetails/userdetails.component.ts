import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../../shared/login.response.model';
import { LoginService } from '../../shared/login.service';
import { AppGlobal } from '../../shared/app-global';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  loginResponse: LoginResponse;
  avatarURL = AppGlobal.USER_AVATAR_URL;


  constructor(private loginService: LoginService) {
    this.loginResponse = new LoginResponse();
  }

  ngOnInit() {
    this.loginResponse = this.loginService.getLoginResponse();

    //todo
    // this.loginResponse.userId = 28;
    // this.loginResponse.name = 'Daniel Leahy';
    // this.loginResponse.role = 'Building Inspector';
    // this.loginResponse.flag = true;
  }
}
