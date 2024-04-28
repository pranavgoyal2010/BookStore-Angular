import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpService: HttpService) { }

  loginApi(data: object) {
    return this.httpService.loginUser('user/login', data)
  }

  registerApi(data: object) {
    return this.httpService.registerUser('user/register', data)
  }

  forgetPasswordApi(data: object) {
    return this.httpService.forgetPassword('user/forgetpassword', data)
  }

  resetPasswordApi(data: object) {
    return this.httpService.resetPassword('user/resetpassword', data)
  }
}