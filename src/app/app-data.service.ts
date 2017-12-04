import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { TUserData } from './struct/types';
import { AppLogService } from './app-log.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AppDataService {
  private serverURI = '/api';

  constructor(
    private http: HttpClient,
    private log: AppLogService) {
  }

  /* GET: get data from server */
  getData(): Observable<TUserData> {
    this.log.add('DataServices: fetched data');
    return this.http.get<TUserData>(this.serverURI);
  }

  /** POST: add a new data to the server */
  addData (data: TUserData): Observable<TUserData> {
    /*
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
      */
      this.log.add('DataServices: added data');
      return this.http.post<TUserData>(this.serverURI, data, httpOptions);
  }

}
