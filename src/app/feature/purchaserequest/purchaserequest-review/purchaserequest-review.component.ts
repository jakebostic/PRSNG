import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-purchaserequest-review',
  templateUrl: './purchaserequest-review.component.html',
  styleUrls: ['./purchaserequest-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {
  title: string = "Request Review";
  requests: PurchaseRequest[] = [];
  authenticatedUser: User;

  constructor(private prSvc: PurchaseRequestService,
              private sysSvc: SystemService) { }

  ngOnInit() {
    this.authenticatedUser = this.sysSvc.data.user.instance;
    this.prSvc.listForReview(this.authenticatedUser.Id)
      .subscribe(prs => {
        this.requests = prs;
        this.populateUserName();
    });

  }
  
  populateUserName(): void {
    for(let pr of this.requests) {
      pr.UserName = pr.User.UserName;
    }
  }
  
}
