import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  title: string = 'User Edit';
  id: string;
  resp: any;
  user: User;

  constructor(private userSvc: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id =
    parms['id']);
    this.userSvc.get(this.id)
      .subscribe(users => {
        this.user = users.length > 0 ? users[0] : null;
        console.log(this.user);
    });
  }
  
  change () {
    console.log(this.user);
    this.userSvc.change(this.user)
      .subscribe(resp => {
        this.resp = resp;
        console.log("User-Change:", this.resp);
        this.router.navigate(['/user/list']);
    });
  }

}
