import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  // userRights;
  orderManagement = true;
  tomorrowOrders = true;
  odersHistory = true;
  constructor(
  ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // setTimeout(() => {
    // this.userManagementService.getUserRight().then((resp) => {
    //   const userRoles = resp['body']['responseObject'];
    //   userRoles.forEach(element => {
    //     if (element.mainMenuId === 1 && element.isSelected === true) {
    //       this.dashboard = true;
    //     }
    //     if (element.mainMenuId === 2 && element.isSelected === true) {
    //       this.userManagement = true;
    //       element.subMenu.forEach((submenu) => {
    //         if (submenu.subMenuId === 101 && submenu.isSelected === true) {
    //           this.createUser = true;
    //         }
    //         if (submenu.subMenuId === 102 && submenu.isSelected === true) {
    //           this.managerUser = true;
    //         }
    //       });
    //     }

    //   });
    //   const newObj = {
    //     mangeOrders: this.manageOrders,
    //     todaysOrders: this.todaysOrders,
    //     odersHistory: this.odersHistory,
    //   };
    //   console.log('USER RIGHTS: ' + JSON.stringify(newObj));
    // });
  }
  // }

}
