import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-addrestio',
  templateUrl: './addrestio.component.html',
  styleUrls: ['./addrestio.component.scss']
})
export class AddrestioComponent implements OnInit {

  myForm = new FormGroup({
    name : new FormControl(null),
    address : new FormControl(null),
    email : new FormControl(null)
  })

  submitted : boolean = false;

  constructor(
    private resto:RestoService
  ) { }

  ngOnInit(): void {

  }

  onSubmit()
  {
     console.log(this.myForm.value)
    this.resto.collectData(this.myForm.value)
    .subscribe( (data) => {
      console.log(data);
      this.submitted = true;
      this.myForm.reset();
    })

  }

  closedAlert()
  {
    this.submitted = false;
  }
}
