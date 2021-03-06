import { Injectable } from '@angular/core';
import { BaseServiceService } from '../base-service/base-service.service';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends BaseServiceService {

  constructor(http: HttpClient) {
    super(http);
   }

   getRegionList () {
    return new Promise((resolve, reject) => {
      try {
        const apiName = 'api/common/getRegionList';
        this.getCall(apiName).subscribe((data) => {
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
