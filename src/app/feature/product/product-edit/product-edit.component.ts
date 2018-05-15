import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';
import { Vendor } from '../../../model/vendor';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title: string = "Product Edit";
  id: string;
  resp: any;
  product: Product;
  vendors: Vendor[];

  constructor(private prodSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              private venSvc: VendorService) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id =
    parms['id']);
    this.venSvc.list().subscribe(vendorList => this.vendors = vendorList);
    this.prodSvc.get(this.id)
      .subscribe(products => {
        this.product = products.length > 0 ? products[0] : null;
        console.log(this.product);
    });
  }
  
  change () {
    console.log(this.product);
    this.prodSvc.change(this.product)
      .subscribe(resp => {
        this.resp = resp;
        console.log("Product-Change:", this.resp);
        this.router.navigate(['/product/list']);
    });
  }
  
  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

}
