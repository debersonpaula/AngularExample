import { Component, OnInit } from '@angular/core';
import { TUserLogin, TServerResponse } from '../struct/types';
import { MainService } from '../services/main.service';
import { TRouteData } from '../struct/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
})
export class LoginComponent implements OnInit {
  UserLogin: TUserLogin;
  NotifyMessage: string;

  constructor(private service: MainService) {
    this.UserLogin = {username: '', userpass: ''};
  }

  ngOnInit() {
  }

  submitLogin(): void {
    this.service.postData('/user/login', this.UserLogin).subscribe(
      data => this.CheckLogin(data),
      err => this.HandleError(err)
    );
  }

  private CheckLogin(data: TServerResponse) {
    if (data.status === 200) {
      this.NotifyMessage = '';
      window.location.replace('/');
    }
  }

  private HandleError(err: any) {
    this.NotifyMessage = err.error.messages.toString();
  }

}

export const LoginData: TRouteData = {
  caption: 'Login', href: 'login', comp: LoginComponent, hideMenu: true};
