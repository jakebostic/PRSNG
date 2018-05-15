import { Injectable } from '@angular/core';
import { PurchaseRequestLineItem } from '../model/purchaserequestlineitem';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const url: string = 'http://localhost:8080/PurchaseRequestLineItem/';

@Injectable()
export class PurchaseRequestLineItemService {
  
  list(): Observable<PurchaseRequestLineItem[]> {
    return this.http.get(url+'List') as Observable<PurchaseRequestLineItem[]>;
  }
  
  listByPR(id): Observable<PurchaseRequestLineItem[]> {
    return this.http.get(url+"LinesForPR?id="+id) as
    Observable<PurchaseRequestLineItem[]>
  }
  
  create(prli: PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url+"Add", prli) as
    Observable<any>;
  }
  
  get(id): Observable<PurchaseRequestLineItem[]> {
    return this.http.get(url+"Get?id="+id) as
    Observable<PurchaseRequestLineItem[]>;
  }
  
  remove(id): Observable<any> {
    return this.http.get(url+"Remove?id="+id) as
    Observable<any>;
  }
  
  change(prli: PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url+"Change", prli) as
    Observable<any>;
  }

  constructor(private http: HttpClient) { }

}
