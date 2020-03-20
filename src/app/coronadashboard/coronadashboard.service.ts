import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const localUrl = 'http://inhyi0685.intl.att.com:8080/getCoronaData';

const httpOptions =  new HttpHeaders()
.set('Content-Type', 'application/json')
;


@Injectable({
  providedIn: 'root'
})

export class CoronadashboardService {
 options = {
    headers: httpOptions
    };
  constructor(private http: HttpClient) { }

  getCorornaData() {
    return this.http.get(localUrl, this.options);
  }

}
