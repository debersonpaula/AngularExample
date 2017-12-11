import { Component, OnInit } from '@angular/core';
import { TUserLogin } from '../struct/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
})
export class LoginComponent implements OnInit {
  UserLogin: TUserLogin;

  constructor() {
    this.UserLogin = {username: '', userpass: ''};
  }

  ngOnInit() {
  }

}
