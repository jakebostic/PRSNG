import { PurchaseRequest } from './purchaserequest';
import { Product } from './product';

export class PurchaseRequestLineItem {
  Id: number;
  PurchaseRequest: PurchaseRequest;
  Product: Product;
  Quantity: number;
  
  constructor(inId: number = 0, pRequest: PurchaseRequest = null, prod: Product = null, quant: number = 0) {
    this.Id = inId;
    this.PurchaseRequest = pRequest;
    this.Product = prod;
    this.Quantity = quant;
  }
}
