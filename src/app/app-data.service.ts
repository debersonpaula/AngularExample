import { Injectable } from '@angular/core';
import { TUserData } from './struct/types';
import { UserData } from './struct/user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppDataService {
  private serverURI = 'http://localhost:4000/user';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<TUserData> {
    // return of(UserData);
    return this.http.get<TUserData>(this.serverURI);
  }

}
