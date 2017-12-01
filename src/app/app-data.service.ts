import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { TUserData } from './struct/types';
// import { UserData } from './struct/user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AppDataService {
  private serverURI = '/user';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<TUserData> {
    // console.log(this.http.get<TUserData>(this.serverURI));
    return this.http.get<TUserData>(this.serverURI);
    // const test = this.http.get<TUserData>(this.serverURI);
    // console.log(test);
    // return of(UserData);
  }

}
