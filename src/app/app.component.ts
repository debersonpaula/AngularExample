import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';
import { TServerResponse } from './struct/types';
import { RouteData } from './modules/mainrouter.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'TNEMA + Angular 5';
  routelist = RouteData; // Route List to define pages
  session: any; // session content

  constructor(private service: MainService) {
    this.session = false;
  }

  ngOnInit() {
    this.getSession();
  }

  /** Execute Logout action */
  doLogout(): void {
    this.service.doGet('/user/logout', res => {
      if (res.status === 200) {
        window.location.replace('/');
      }
    });
  }

  private getSession(): void {
    this.service.doGet('/user', res => {
      if (res.status === 200) {
        this.session = res.messages[0];
      }
    });
  }
}
