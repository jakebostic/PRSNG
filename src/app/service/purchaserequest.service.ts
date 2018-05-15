import { Injectable } from '@angular/core';
import { PurchaseRequest } from '../model/purchaserequest';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const url: string = 'http://localhost:8080/PurchaseRequests/';

@Injectable()
export class PurchaseRequestService {
  
  list(): Observable<PurchaseRequest[]> {
    return this.http.get(url+'List') as Observable<PurchaseRequest[]>;
  }
  
  submitForReview(purchaseRequest: PurchaseRequest): Observable<any> {
        return this.http.post(url+"Submit", purchaseRequest) as Observable<any>;
    }
  
  listForReview(id): Observable<PurchaseRequest[]> {
        return this.http.get(url+"ListReview?id="+id) as Observable<PurchaseRequest[]>;
    }
  
  create(pr: PurchaseRequest): Observable<any> {
    console.log("prsvc.create...");
    return this.http.post(url+"Add", pr) as
    Observable<any>;
  }
  
  get(id): Observable<PurchaseRequest[]> {
    return this.http.get(url+"Get?id="+id) as
    Observable<PurchaseRequest[]>;
  }
  
  remove(id): Observable<any> {
    return this.http.get(url+"Remove?id="+id) as
    Observable<any>;
  }
  
  change(pr: PurchaseRequest): Observable<any> {
    return this.http.post(url+"Change", pr) as
    Observable<any>;
  }
  
  approve(pr: PurchaseRequest): Observable<any> {
    return this.http.post(url+"ApprovePR", pr) as Observable<any>
  }
  
  reject(pr: PurchaseRequest): Observable<any> {
    return this.http.post(url+"RejectPR", pr) as Observable<any>
  }

  constructor(private http: HttpClient) { }

}
