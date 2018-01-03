import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

import { TContent } from '../struct/types';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MainService {
    constructor(private http: HttpClient) {}

    /** GET: get data from server */
    getData(URI: string): Observable<TContent> {
        console.log('getData from URI ' + URI);
        return this.http.get<TContent>(URI);
    }

    /** POST: send data to server */
    postData(URI: string, data: any): Observable<TContent> {
        console.log('postData to URI ' + URI);
        return this.http.post<TContent>(URI, data, httpOptions);
    }
}
