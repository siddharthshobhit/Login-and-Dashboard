import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SharedService } from '../../services/shared/shared.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  changePasswordForm: FormGroup;
  width = 0;
  user = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  userName;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
  ) {


  }

  ngOnInit() {
    $(function ($) {
      $('.sidebar-dropdown > a').click(function () {
        $('.sidebar-submenu').slideUp(200);
        if (
          $(this)
            .parent()
            .hasClass('active')
        ) {
          $('.sidebar-dropdown').removeClass('active');
          $(this)
            .parent()
            .removeClass('active');
        } else {
          $('.sidebar-dropdown').removeClass('active');
          $(this)
            .next('.sidebar-submenu')
            .slideDown(200);
          $(this)
            .parent()
            .addClass('active');
        }
      });



      $('#show-sidebar').click(function () {
        $('.page-wrapper').toggleClass('toggled');
      });

    });


    $(window).bind('resize', function () {
      console.log($(this).width())
      if ($(this).width() < 1026) {
        $('.page-wrapper').removeClass('toggled');
      } else {
        $('.page-wrapper').addClass('toggled');
      }
    }).trigger('resize');


    $('.nav-icon').click(function () {
      $(this).toggleClass('open');
    });

    this.changePasswordForm = new FormGroup({
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });

    this.sharedService.getLocalStorageItem('userData').then((val: any) => {
      console.log(val);
      this.userName = val;
    });

  }

  openNav() {
    this.width = 250;
  }

  closeNav() {
    this.width = 0;
  }

  logOut() {
    this.router.navigate(['/Login'])
  }

  submitForm () {
    if(this.changePasswordForm.valid) {
      const newObj = {
          action: 1,
          id: 1,
          newPassword: '1234'
        };
    }
  }

  viewProfile () {
    this.router.navigate(['/userProfile'])
  }
}
