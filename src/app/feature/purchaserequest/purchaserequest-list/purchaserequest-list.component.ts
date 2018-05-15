import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {
  requests: PurchaseRequest[];
  title: string = "Purchase Request List";
  //user: User;

  constructor(private prSvc: PurchaseRequestService,
              private userSvc: UserService,
              private sysSvc: SystemService) { }

  ngOnInit() {
    console.log('getting list of prs...');
    this.prSvc.list().subscribe(prs => {
      this.requests = prs;
      console.log(prs);
      this.populateUserName();
    });
    
//    this.userSvc.login("jbostic", "passwords")
//      .subscribe(users => {
//        if(users.length > 0) {
//          this.user = users[0];
//          this.sysSvc.data.user.instance = this.user;
//          this.sysSvc.data.user.loggedIn = true;
//          console.log("SysSvc:", this.sysSvc.debug);
//        }
//    });
  }
  
  populateUserName(): void {
    for(let pr of this.requests) {
      pr.UserName = pr.User.UserName;
    }
  }
//  setSortBy(column: string): void {
//    this.sortBy = column;
//  }

}

