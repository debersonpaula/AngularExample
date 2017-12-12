import { Component, OnInit } from '@angular/core';
import { TUserLogin, TContent } from '../struct/types';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
})
export class LoginComponent implements OnInit {
  UserLogin: TUserLogin;
  NotifyMessage: string;

  constructor(private service: MainService) {
    this.UserLogin = {username: '', userpass: ''};
    this.NotifyMessage = '';
  }

  ngOnInit() {
  }

  submitLogin(): void {
    // console.log(this.UserLogin);
    // let data: TContent = { code}

    this.service.postData('/user/login', this.UserLogin).subscribe(function(data){ console.log(data); });
  }

}
