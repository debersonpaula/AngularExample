import { Component, OnInit } from '@angular/core';
import { TUserData } from '../struct/user';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  userinfo: TUserData = {
    name: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

}
