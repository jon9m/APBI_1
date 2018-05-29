import { Injectable } from "@angular/core";
import { LoginResponse } from "./login.response.model";

@Injectable()
export class LoginService {

    private loginResponse: LoginResponse;

    setLoginResponse(loginResp: LoginResponse) {
        this.loginResponse = loginResp;
    }

    getLoginResponse() {
        return this.loginResponse;
    }
}