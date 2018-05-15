import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {
  title: string = "Request Detail";
  request: PurchaseRequest;
  resp: any;
  id: string;

  constructor(private prSvc: PurchaseRequestService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getRequestById(id);
    });
  }
  
  getRequestById(id) {
    this.prSvc.get(id)
      .subscribe(requests => {
        this.request = requests.length > 0 ? requests[0] :
        null;
        console.log("Request:", this.request);
    });
  }
  
  remove(): void {
    this.prSvc.remove(this.request.Id).subscribe(res => {
		this.router.navigateByUrl("/purchaserequest/list");
			});
  }

}
