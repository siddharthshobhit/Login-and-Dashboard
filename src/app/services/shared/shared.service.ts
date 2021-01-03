import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private sanitizer: DomSanitizer,
    private spinnerService: NgxSpinnerService,
    private toastr: ToastrService,
  ) { }

  setLocalStorageItem(key, value) {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(key, value);
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  }

  getLocalStorageItem(key) {
    return new Promise((resolve, reject) => {
      try {
        const resJson = localStorage.getItem(key);
        resolve(resJson);
      } catch (e) {
        reject(e);
      }
    });
  }

  clearLocalStorageItem(key) {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem(key);
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  }

  separateTimeAndTimeFormat(str: string, delimeter: string): any[] {
    if (typeof str === undefined) {
      return [];
    } else {
      return str.split(delimeter);
    }
  }

  convertDateToTimeFormat(date: string): string {
    const recievedDate = new Date(date);
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    return recievedDate.toLocaleString('en-US', options);
  }

  setLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }


  safeUrl(val) {
    return this.sanitizer.bypassSecurityTrustUrl(val);
  }

  safeHtml(val) {
    return this.sanitizer.bypassSecurityTrustHtml(val);
  }

  safeResourceUrl(val) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(val);
  }

  showLoader() {
    this.spinnerService.show();
  }

  hideLoader() {
    this.spinnerService.hide();
  }

  showSuccess(message) {
    this.toastr.success(message, 'Success!', {
      timeOut: 3000,
      positionClass: 'toast-top-right'
    });
  }

  showInfo(message) {
    this.toastr.info(message, 'Info!', {
      timeOut: 3000,
      positionClass: 'toast-top-right'
    });
  }

  showWarning(message) {
    this.toastr.warning(message, 'Warning !', {
      timeOut: 3000,
      positionClass: 'toast-top-right'
    });
  }

  showError(message) {
    this.toastr.error(message, 'Error!', {
      timeOut: 3000,
      positionClass: 'toast-top-right'
    });
  }

  loaderWithTimer() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }

  cleanAllLocalStorage() {
    localStorage.clear();
  }

  formatDate<T>(val, formaTType) {
    return new Promise((resolve, reject) => {
      try {
        let selectedDate;
        if (val !== null && val.year) {
          selectedDate = val.year + '-' + val.month + '-' + val.day;
        } else {
          selectedDate = val;
        }
        if (moment(selectedDate, formaTType).isValid()) {
          resolve(selectedDate);
        } else {
          reject();
        }
      } catch (error) {
      }
    });
  }

}
