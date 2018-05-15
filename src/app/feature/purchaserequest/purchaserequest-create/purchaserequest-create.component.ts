import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {
  title: string = "Request Create";
  resp: any;
  request: PurchaseRequest = new PurchaseRequest();
  users: User[];
  
  create () {
    this.prSvc.create(this.request)
      .subscribe(resp => {
        this.resp = resp;
        console.log("Request-Create:", this.resp);
        this.router.navigate(['/purchaserequest/list']);
    });
  }

  constructor(private prSvc: PurchaseRequestService,
              private router: Router,
              private sysSvc: SystemService) { }

  ngOnInit() {
    if(this.sysSvc.data.user.loggedIn) {
      this.request.User = this.sysSvc.data.user.instance;
    } else {
      console.error("User not logged in");
    }
  }

}
