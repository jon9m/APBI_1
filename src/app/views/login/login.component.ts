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

  loginform: FormGroup;
  loginResponse: LoginResponse;

  constructor(private fb: FormBuilder, private httpService: HTTPService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginResponse = new LoginResponse();

    this.loginform = this.fb.group({
      'username': '',
      'password': ''
    });
  }

  onLogin() {
    console.log(this.loginform.value);
    this.httpService.login(this.loginform.value).subscribe(
      (response: Response) => {
        Object.assign(this.loginResponse, response);
        this.loginService.setLoginResponse(this.loginResponse);

        console.log(this.loginResponse);
        if (this.loginResponse.flag == true) {
          this.router.navigate(['/dashboard']);
        } else {
          console.log('Login unsuccessful!');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
