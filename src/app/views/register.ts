import { Component, OnInit } from '@angular/core';
import { TUserRegister, TServerResponse } from '../struct/types';
import { MainService } from '../services/main.service';
import { TRouteData } from '../struct/types';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
})
export class RegisterComponent implements OnInit {
  UserRegister: TUserRegister;
  NotifyMessage: string;

  constructor(private service: MainService) {
    this.UserRegister = {username: '', userpass: '', userpass2: ''};
  }

  ngOnInit() {
  }

  submitLogin(): void {
    this.service.postData('/user', this.UserRegister).subscribe(
      data => this.CheckRegister(data),
      err => this.HandleError(err)
    );
  }

  private CheckRegister(data: TServerResponse) {
    if (data.status === 200) {
      this.NotifyMessage = '';
      window.location.replace('/');
    }
  }

  private HandleError(err: any) {
    this.NotifyMessage = err.error.messages.toString();
  }
}

export const RegisterData: TRouteData = {
  caption: 'Register', href: 'register', comp: RegisterComponent, hideMenu: true};
