import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  title: string = "User Detail";
  user: User;

  constructor(private userSvc: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getUserById(id);
    });
  }
  
  getUserById(id) {
    this.userSvc.get(id)
      .subscribe(users => {
        this.user = users.length > 0 ? users[0] : null;
        console.log("User:", this.user);
    });
  }
  
  remove(): void {
    this.userSvc.remove(this.user.Id)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/user/list");
  });
  }

}
