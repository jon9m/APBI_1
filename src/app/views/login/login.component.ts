import { Component, OnInit } from '@angular/core';
import { AppGlobal } from '../../shared/app-global';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HTTPService } from '../../shared/http.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../../shared/login.response.model';
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  loginError: string = "";
  loginform: FormGroup;
  loginResponse: LoginResponse;
  isSignningIn: boolean = false;

  constructor(private fb: FormBuilder, private httpService: HTTPService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginResponse = new LoginResponse();

    this.loginform = this.fb.group({
      'username': '',
      'password': ''
    });
  }

  onLogin() {
    this.isSignningIn = true;
    this.loginError = "";
    this.loginResponse.flag = true;

    this.httpService.login(this.loginform.value).subscribe(
      (response: Response) => {
        this.isSignningIn = false;
        Object.assign(this.loginResponse, response);
        this.loginService.setLoginResponse(this.loginResponse);

        console.log(this.loginResponse); //TODO
        if (this.loginResponse.flag == true) {
          this.router.navigate(['/dashboard']);
        } else {
          this.loginError = this.loginResponse.message;
        }
      },
      (error) => {
        this.isSignningIn = false;
        this.loginResponse.flag = false;
        this.loginError = error.message;
      }
    );
  }
}
