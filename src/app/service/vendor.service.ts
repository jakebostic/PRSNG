import { Injectable } from '@angular/core';
import { Vendor } from '../model/vendor';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const url: string = 'http://localhost:8080/Vendors/';

@Injectable()
export class VendorService {
  
  list(): Observable<Vendor[]> {
    return this.http.get(url+'List') as
    Observable<Vendor[]>;
  }
  
  create(vendor: Vendor): Observable<any> {
    console.log("vendorsvc.create...");
    return this.http.post(url+"Add", vendor) as
    Observable<any>;
  }
  
  get(id): Observable<Vendor[]> {
    return this.http.get(url+"Get?id="+id) as
    Observable<Vendor[]>;
  }
  
  remove(id): Observable<any> {
    return this.http.get(url+"Remove?id="+id) as
    Observable<any>;
  }
  
  change(vendor: Vendor): Observable<any> {
    return this.http.post(url+"Change", vendor) as
    Observable<any>;
  }

  constructor(private http: HttpClient) { }

}
