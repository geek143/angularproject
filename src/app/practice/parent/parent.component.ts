import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private _userSer: DesignUtilityService) {

  }
  users = [];

  ngOnInit(): void {
    this.users = this._userSer.newUsers;
  }

  count;
  addUser(user)
  {
     this.users.push({
      name: user
    })
    if(this.users.length > 0)
    {
      this.count = this.users.length
    }

  }

  delUser(item)
  {
    this.users.splice(item, 1);
  }
  // delUser(item)
  // {
  //   this.users.splice(item, 1);
  // }
}
