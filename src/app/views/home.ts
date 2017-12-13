import { Component, OnInit } from '@angular/core';
import { TRouteData } from '../struct/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
})
export class HomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}

export const HomeData: TRouteData = {caption: 'Home', comp: HomeComponent, hideMenu: false, href: ''};
