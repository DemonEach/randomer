import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: any[];

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.items = new Array();
    this.items = [
      { href: '/home', text: 'Rand int', id: 0, active: false },
      { href: '/rand-people', text: 'Rand people', id: 1, active: false },
    ];
    this.items.map((val) => {
      if (val.href === this.location.path()) {
        val.active = true;
      }
    });
  }

  setActive = (path) => {
    this.items.forEach(element => {
      element.active = false;
    });
    const index = path.currentTarget.id;
    this.items[index].active = true;
    this.router.navigate([this.items[index].href]);
  }
}
