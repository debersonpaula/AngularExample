import { Component } from '@angular/core';
import { RouteData } from './struct/routedata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App - Test 1';
  routelist = RouteData;
  constructor() {
  }
}
