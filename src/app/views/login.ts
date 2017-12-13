import { Component, OnInit } from '@angular/core';
import { TUserLogin, TContent } from '../struct/types';
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
      data => this.CheckLogin(data)
    );
  }

  private CheckLogin(data: TContent) {
    if (data.code === 'ACCEPTED') {
      this.NotifyMessage = '';
      window.location.replace('/');
    } else {
      this.NotifyMessage = data.content;
    }
  }

}

export const LoginData: TRouteData = {
  caption: 'Login', href: 'login', comp: LoginComponent, hideMenu: true};
