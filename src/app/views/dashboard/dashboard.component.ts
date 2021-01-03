import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Route, Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  headerTitle = 'Home';
  selectRegion;
  imagePath;
  user_photo: SafeResourceUrl;
  backToHome;
  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private router: Router,
    public _DomSanitizationService: DomSanitizer
  ) {
    // import { Route, Router, ActivatedRoute, NavigationExtras } from '@angular/router';
    // this.backToHome = JSON.parse(this.route.snapshot.queryParamMap.get('dataItem'));
    // console.log('backToHome ' + this.backToHome);
    console.log(this.route.snapshot.queryParamMap.get('data'));
  }

  ngOnInit() {
    // this.domSanitizer.bypassSecurityTrustResourceUrl(
    //   'data:image/jpeg;base64,' + data);
    // this.imagePath = this._DomSanitizationService.bypassSecurityTrustUrl('data:image/jpeg;base64,' + '/Users/sid/Downloads');

    // tslint:disable-next-line:max-line-length
  }

  getSubCategoryItems(items) {
    this.router.navigate(['/itemList'], {
      queryParams: {
        data: JSON.stringify(items)
      }
    });
  }

  addCategoryItems(items) {
    this.router.navigate(['/app-edit-create-category'], {
      queryParams: {
        data: JSON.stringify(items),
        parent: 'new'
      }
    });
  }

  selectedRegion(event) {
    this.selectRegion = event;
  }

}
