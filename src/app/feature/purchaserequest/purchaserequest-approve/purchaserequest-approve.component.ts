import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';

@Component({
  selector: 'app-purchaserequest-approve',
  templateUrl: './purchaserequest-approve.component.html',
  styleUrls: ['./purchaserequest-approve.component.css']
})
export class PurchaseRequestApproveComponent implements OnInit {
  title: string = "Request Approve/Reject";
  id: string;
  prliId: string = '0';
  request: PurchaseRequest;
  lines: PurchaseRequestLineItem[];
  resp: any;
  reasonForRejection: string = "";

  constructor(private prSvc: PurchaseRequestService,
              private prliSvc: PurchaseRequestLineItemService,
              private route: ActivatedRoute,
              private router: Router) { }
  

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.prSvc.get(this.id)
      .subscribe(pRequests => {
        this.request = pRequests.length > 0 ? pRequests[0] : 
        null;
    }
  );
    
    this.prliSvc.listByPR(this.id)
      .subscribe(prlis => {
        this.lines = prlis;
    });
  }
  
  approve() {
    this.prSvc.approve(this.request)
      .subscribe(res => {
        this.router.navigateByUrl("/purchaserequest/review");
    });
  }
  
  reject() {
    this.request.ReasonForRejection = this.reasonForRejection;
    this.prSvc.reject(this.request)
      .subscribe(res => {
        this.router.navigateByUrl("/purchaserequest/review");
    });
  }

}
