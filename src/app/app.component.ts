import { Component, OnInit } from '@angular/core';
import { RouteData } from './struct/routedata';
import { MainService } from './services/main.service';
import { TServerResponse } from './struct/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Welcome to Angular-TNEMA Server'; // Title of the page
  routelist = RouteData; // Route List to define pages
  session: any; // session content

  // main constructor
  constructor(private service: MainService) {
    this.session = false;
  }

  // get data
  ngOnInit() {
    this.getSession();
  }

  // get session status
  getSession(): void {
    this.service.getData('/user').subscribe(
      data => this.DefineSession(data),
      err => this.HandleError(err)
    );
  }

  // logout
  doLogout(): void {
    this.service.getData('/user/logout').subscribe(function(){
      window.location.replace('/');
    });
  }

  private HandleError(err: any) {
    this.session = false;
  }

  private DefineSession(data: TServerResponse) {
    console.log(data);
    this.session = data.messages[0];
  }
}
