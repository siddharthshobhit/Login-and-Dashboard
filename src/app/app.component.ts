import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample';
  showHead = false;
  private loggedIn = false;
  constructor(private router: Router,
    private sharedService: SharedService,
    private spinner: NgxSpinnerService,
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] === '/Login') {
          this.showHead = false;
        } else if (event['url'] === '/' || event['url'] === undefined || event['url'] == null) {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
    localStorage.setItem('loggedIn', 'false');
  }

}
