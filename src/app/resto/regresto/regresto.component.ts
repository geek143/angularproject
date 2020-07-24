import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-regresto',
  templateUrl: './regresto.component.html',
  styleUrls: ['./regresto.component.scss']
})
export class RegrestoComponent implements OnInit {

  myForm = new FormGroup({
    username : new FormControl(null),
    email : new FormControl(null),
    password : new FormControl(null)
  });
  constructor(
    private resto: RestoService
  ) { }

  ngOnInit(): void {
  }

  register()
  {
    this.resto.addUser(this.myForm.value)
    .subscribe( (data) => {
      this.myForm.reset();
    })
  }

}
