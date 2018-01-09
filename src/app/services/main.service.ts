import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

import { TServerResponse } from '../struct/types';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MainService {
    constructor(private http: HttpClient) {}

    /** GET: get data from server */
    getData(URI: string): Observable<TServerResponse> {
        console.log('getData from URI ' + URI);
        return this.http.get<TServerResponse>(URI);
    }

    /** POST: send data to server */
    postData(URI: string, data: any): Observable<TServerResponse> {
        console.log('postData to URI ' + URI);
        return this.http.post<TServerResponse>(URI, data, httpOptions);
    }
}
