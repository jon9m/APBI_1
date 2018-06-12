import { Injectable } from "@angular/core";
import { LoginResponse } from "./login.response.model";
import { Router } from "@angular/router";

@Injectable()
export class LoginService {

    token: string;
    private loginResponse: LoginResponse;

    constructor(private router: Router) {

    }

    setLoginResponse(loginResp: LoginResponse) {
        this.loginResponse = loginResp;
    }

    getLoginResponse() {
        return this.loginResponse;
    }

    isAuthenticated() {
        return true
        // return (this.loginResponse && this.loginResponse.flag != false) && (this.loginResponse.userId != -1);
    }

    logout() {
        this.loginResponse.flag == false;
        this.loginResponse.userId == -1;

        this.router.navigate(['/login']);
    }
}