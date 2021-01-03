import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  @Input() searchList: any;

  @Input('tableTitle') tableTitle: string;
  @Input('tableHeader') tableHeader: any;
  @Input('tableData') tableData: any = [];
  @Output() postData: EventEmitter<any> = new EventEmitter<any>();
  Arr = Array;
  constructor() { }

  ngOnInit() {
    // if(this.tableHeader==undefined || this.tableHeader==null){
    //   this.tableHeader = [{key:'username',label:'UserName'},{key:'dateRegistered',label:'Date registered'},{key:'role',label:'Role'},{key:'status',label:'Status'}];
    // } 

    console.log("tableData " +JSON.stringify(this.tableData))
  }

  selectedItem (event) {
    this.postData.emit(event);
    console.log('SELECTED ' +JSON.stringify(event))
  }

}
