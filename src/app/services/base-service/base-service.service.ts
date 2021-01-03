import { Response, RequestOptions, Http, } from '@angular/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/shared.service';
@Injectable()
export class BaseServiceService {
  apiURL: string = 'http://api.plos.org/search?q=title:DNA';
  token;
  constructor(
    public http: HttpClient
  ) {
    
      console.log("TOKEN : ",  this.token);
   }


  getRequestHeader(): HttpHeaders {
    let authToken: string = "Default Token";
    const headers = new HttpHeaders();
    headers.set('content-type', 'application/json');
    headers.set('Authorization', 'DefaultToken');
    headers.set('Access-Control-Allow-Origin', "*");
    headers.set('Token', '12123123dwsww1qws2dwd23');
    return headers;
  }



   getCall(apiUrl): Observable<HttpResponse<Object>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': localStorage.getItem('AccessToken')|| ''
      }),
      observe: 'response' as 'response'
    };
    return this.http.get<HttpResponse<Object>>(environment.baseUrl + apiUrl, httpOptions).pipe(map((observe: HttpResponse<any>) => {
      return observe;
    }));
  }

  postCall(apiUrl, body): Observable<HttpResponse<Object>> {
    const httpOptions = {
      headers: new HttpHeaders({
        // "Accept": "*/*",
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': localStorage.getItem('AccessToken') || ''
      }),
      observe: 'response' as 'response'
    };
    return this.http.post<HttpResponse<Object>>(environment.baseUrl + apiUrl, body, httpOptions).pipe(map((observe: HttpResponse<any>) => {
      return observe;
    }));
  }

  postCallUploadFiles(apiUrl, body): Observable<HttpResponse<Object>> {
    console.log('Token :' , localStorage.getItem('AccessToken'))
    const httpOptions = {
      headers: new HttpHeaders({
        // "Accept": "*/*",
        'Access-Control-Allow-Origin': '*',
        'Authorization': localStorage.getItem('AccessToken')
      }),
      observe: 'response' as 'response'
    };
    return this.http.post<HttpResponse<Object>>(environment.baseUrl + apiUrl, body, httpOptions).pipe(map((observe: HttpResponse<any>) => {
      return observe;
    }));
  }

  deleteCall(apiUrl, body): Observable<HttpResponse<Object>> {
    return this.http.delete<HttpResponse<Object>>(apiUrl, body).pipe(map((observe: HttpResponse<any>) => {
      return observe;
    }));
  }

  public putCall<T>(apiUrl: string, body: Object): Observable<HttpResponse<Object>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('AccessToken'),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      observe: 'response' as 'response'
    };
    return this.http.put<HttpResponse<Object>>(apiUrl, body).pipe(map((observe: HttpResponse<any>) => {
      return observe;
    }));
  }

}
