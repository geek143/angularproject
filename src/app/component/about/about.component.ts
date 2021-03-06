import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta }     from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  title = "About Us Page";
  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle( this.title );
    this.meta.addTag({
      name: 'description', content: 'This is My About Us Page'
    })
    this.meta.updateTag({
      name: 'description', content: 'This is My About 123 Us Page'
    })
  }

  users = [];

  addValue(val) {
    this.users.push({
      name: val.value,
    });
    if (this.users.length > 3) {
      this.router.navigate(['products']);
    }
  }

  delUser(item) {
    this.users.splice(item, 1);
  }

  removeUser() {
    this.users.splice(this.users.length - 1);
  }

  newValue = 'Lucky';
  update(val) {
    this.newValue = val.value;
  }

  hideMe: boolean = true;

  desTroy() {
    this.hideMe = false;
  }

  productArr = [
    {
      sno: 1,
      name: 'Mobile',
      price : 2000,
      availabilty : "Available"
    },
    {
      sno: 2,
      name: 'Desktop',
      price : 5000,
      availabilty : "Not Available"
    },
    {
      sno: 3,
      name: 'Laptop',
      price : 20000,
      availabilty : "Available"
    },
    {
      sno: 4,
      name: 'Machine',
      price : 8500,
      availabilty : "Not Available"
    },
  ];

  nameValue = '';
}
