import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {
  title: string = "Request Edit";
  id: string;
  resp: any;
  request: PurchaseRequest;
  users: User[];

  constructor(private prSvc: PurchaseRequestService,
              private router: Router,
              private route: ActivatedRoute,
              private userSvc: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.userSvc.list().subscribe(userList => 
    this.users = userList);
    this.prSvc.get(this.id)
      .subscribe(requests => {
        this.request = requests.length > 0 ? requests[0] :
        null;
        console.log(this.request);
    });
  }
  
  change() {
    console.log(this.request);
    this.prSvc.change(this.request)
      .subscribe(resp => {
        this.resp = resp;
        console.log("Request-Change:", this.resp);
       this.router.navigate(['/purchaserequest/list']);
    });
  }
 

}
