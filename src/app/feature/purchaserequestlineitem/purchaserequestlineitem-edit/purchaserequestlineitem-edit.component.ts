import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-purchaserequestlineitem-edit',
  templateUrl: './purchaserequestlineitem-edit.component.html',
  styleUrls: ['./purchaserequestlineitem-edit.component.css']
})
export class PurchaseRequestLineItemEditComponent implements OnInit {
  title: string = "Line Item Edit";
  id: string;
  resp: any;
  request: PurchaseRequest;
  products: Product[];
  prli: PurchaseRequestLineItem;
  prid: string;
  
  change() {
    this.prli.PurchaseRequest = new PurchaseRequest(+this.prid);
    this.prliSvc.change(this.prli)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigateByUrl('/purchaserequest/lines/'+this.prid);
    });
  }
  
  compareFn(p1: number, p2: number): boolean {
    return p1 === p2;
  }

  constructor(private prliSvc: PurchaseRequestLineItemService,
              private pSvc: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(parms => {
  		this.id = parms['id'];
  		this.prid = parms['prid'];
  	});
  	this.prliSvc.get(this.id)
      .subscribe(prlineitems => {
          this.prli = prlineitems.length > 0 ? prlineitems[0] : null;
      });
  	this.pSvc.list()
      .subscribe(products => {
          this.products = products; 
      });
  }

}
