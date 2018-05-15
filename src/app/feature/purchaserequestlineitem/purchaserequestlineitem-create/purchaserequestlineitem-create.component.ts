import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-purchaserequestlineitem-create',
  templateUrl: './purchaserequestlineitem-create.component.html',
  styleUrls: ['./purchaserequestlineitem-create.component.css']
})
export class PurchaseRequestLineItemCreateComponent implements OnInit {
  title: string = "Line Item Create";
  resp: any;
  request: PurchaseRequest;
  product: Product;
  products: Product[];
  prli: PurchaseRequestLineItem = new PurchaseRequestLineItem(0, this.request, this.product, 0);
  prid: number;
  
  create() {
    this.prli.PurchaseRequest = this.request;
    console.log(this.request);
    this.prliSvc.create(this.prli)
      .subscribe(resp => {
        this.resp = resp;
        console.log("Request-Create:", this.resp);
       this.router.navigate(['/purchaserequest/lines/'+this.prid]);
    });
  }

  constructor(private prliSvc: PurchaseRequestLineItemService,
              private prSvc: PurchaseRequestService,
              private prodSvc: ProductService,
              private sysSvc: SystemService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.prid = parms['id']);
    this.prSvc.get(this.prid).subscribe(pRequests => {
      this.request = pRequests.length > 0 ? pRequests[0] : null;
    });
    this.prodSvc.list().subscribe(prods => {
      this.products = prods;
    });
  }

}
