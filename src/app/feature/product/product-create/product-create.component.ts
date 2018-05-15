import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { Vendor } from '../../../model/vendor';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title: string = "Product Create";
  resp: any;
  product: Product = new Product();
  vendors: Vendor[];
  
  create () {
    console.log(this.product);
    this.prodSvc.create(this.product)
      .subscribe(resp => {
        this.resp = resp;
        console.log("Product-Create:", this.resp);
        this.router.navigate(['/product/list']);
    });
  }
  
  constructor(private prodSvc: ProductService, private router: Router, private venSvc: VendorService) { }

  ngOnInit() {
    this.venSvc.list().subscribe(vendorList => this.vendors = vendorList);
}
  
}