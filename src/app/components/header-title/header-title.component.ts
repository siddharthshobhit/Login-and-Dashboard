import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.css']
})
export class HeaderTitleComponent implements OnInit {
  @Input() headerTitle: any;
  constructor(
    private _location: Location,
  ) {

  }

  ngOnInit() {
  }

  backButtonClicked() {
    this._location.back();
    // this.backButton.emit();
  }
}
