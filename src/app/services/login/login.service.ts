import { Injectable } from '@angular/core';
import { BaseServiceService } from '../base-service/base-service.service';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseServiceService {

  constructor(http: HttpClient) {
    super(http);
   }

   login (postObj) {
    return new Promise((resolve, reject) => {
      try {
        const apiName = 'api/auth/login';
        this.postCall(apiName, postObj).subscribe((data) => {
          if (data !== null && data !== undefined) {
            resolve(data);
          } else {
            reject();
          }
        }, (error) => {
          // console.log("ERROR STATUS", error);
          reject(error);
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}
