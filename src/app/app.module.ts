/*Dependencies Start*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BaseServiceService } from './services/base-service/base-service.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { NgxSpinnerModule } from 'ngx-spinner';

/*Views Start*/
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
/*Views End*/

/*Component Start*/
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { HeaderTitleComponent } from './components/header-title/header-title.component';
import { SearchListComponent } from './components/search-list/search-list.component';
/*Component End*/



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    SideBarComponent,
    BreadCrumbComponent,
    HeaderTitleComponent,
    SearchListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      // timeOut: 10000,
      // positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true
    }),
    NgbModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularDateTimePickerModule,
    // NgxSpinnerModule,
    NgxLoadingModule.forRoot({}),
    NgxSpinnerModule
  ],
  providers: [BaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  static injector: Injector;
  constructor(injector: Injector) {
    AppModule.injector = injector;
  }
}
