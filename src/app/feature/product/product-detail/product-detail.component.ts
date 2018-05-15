import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title: string = "Product Detail";
  product: Product;

  constructor(private prodSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getProductById(id);
    });
  }
  
  getProductById(id) {
    this.prodSvc.get(id)
      .subscribe(products => {
        this.product = products.length > 0 ? products[0] :
        null;
        console.log("Product:", this.product);
    });
  }
  
  remove(): void {
    this.prodSvc.remove(this.product.Id)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/product/list");
  });
  }

}
