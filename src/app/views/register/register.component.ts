import { Component, OnInit } from '@angular/core';
import { TRouteData, TUserRegister } from '../../struct/types';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  UserRegister: TUserRegister;
  NotifyMessage: string;

  constructor(private service: MainService) {
    this.UserRegister = {username: '', userpass: '', userpass2: ''};
  }

  ngOnInit() {
  }

  submitRegister(): void {
    this.service.doPost('/user', this.UserRegister, res => {
      if (res.status === 200) {
        this.NotifyMessage = '';
        this.service.doAuth(res);
        window.location.replace('/');
      } else {
        this.NotifyMessage = res  .messages.toString();
      }
    });
  }

}

export const RegisterData: TRouteData = {caption: 'Register', href: 'register', comp: RegisterComponent, hideMenu: true};
