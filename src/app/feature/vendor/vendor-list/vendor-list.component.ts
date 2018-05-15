import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../../model/vendor';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[];
  title: string = "Vendor List";

  constructor(private venSvc: VendorService) { }

  ngOnInit() {
    this.venSvc.list().subscribe(venSvcList => {
                                console.log('list of vendors...');
                                console.log(venSvcList);
                                this.vendors = venSvcList;
    
    });
  }

}
