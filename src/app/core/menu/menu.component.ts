import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: Menu[] = [
    new Menu('Home', '/home', 'Go to home'),
    new Menu('User', '/user/list', 'Go to users'),
    new Menu('Vendor', '/vendor/list', 'Go to vendors'),
    new Menu('Product', '/product/list', 'Go to products'),
    new Menu('Purchase Request', '/purchaserequest/list', 'Purchase requests'),
    new Menu('Review', '/purchaserequest/review', 'Review a request'),
    new Menu('Login', '/user/login', 'Go to login'),
    new Menu('About', '/about', 'Go to about')
  ];

  constructor() { }

  ngOnInit() {
  }

}
