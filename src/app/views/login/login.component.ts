import { Component, OnInit, EventEmitter, Compiler } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Route, Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  resp;
  myName = 'FreshMorgen';
  formSubmitted = false;
  user = {
    login: '',
    password: ''
  };
  constructor(
    private router: Router,
    private sharedService: SharedService,
    private _compiler: Compiler
    // private spinner: NgxSpinnerService
  ) {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this._compiler.clearCache();
    this.sharedService.cleanAllLocalStorage();
  }

  goToLogin() {
    this.formSubmitted = true;
    this._compiler.clearCache();
    this.sharedService.cleanAllLocalStorage();
    this.sharedService.setLocalStorage('loggedIn', 'true');
    this.router.navigateByUrl('/Home');
  }

}
