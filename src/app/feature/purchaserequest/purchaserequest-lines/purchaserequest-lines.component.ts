import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-purchaserequest-lines',
  templateUrl: './purchaserequest-lines.component.html',
  styleUrls: ['./purchaserequest-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {
  title: string = "Request Line Items";
  id: string;
  prliId: string;
  request: PurchaseRequest;
  lines: PurchaseRequestLineItem[];
  resp: any;
  
  submitForReview() {
    this.prSvc.submitForReview(this.request)
      .subscribe(resp => {
       this.resp = resp;
       this.router.navigate(['/purchaserequest/list']);
    });
  }
  
  remove(): void {
    this.prliSvc.remove(this.prliId)
      .subscribe(res => {
        this.router.navigateByUrl('/purchaserequest/lines/'+this.id);
  });

  }

  constructor(private prSvc: PurchaseRequestService,
              private prliSvc: PurchaseRequestLineItemService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.route.params.subscribe(parms => this.prliId = parms['del']);
    this.prSvc.get(this.id).subscribe(pRequests => {
      this.request = pRequests.length > 0 ? pRequests[0] : null;
    });
    
    if (this.prliId!='0') {
      this.remove();
  }
    
    this.prliSvc.listByPR(this.id)
  		.subscribe(prlis => {
        this.lines = prlis;
      });
  }

}
