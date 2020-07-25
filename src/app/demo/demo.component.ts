import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DesignUtilityService } from '../appServices/design-utility.service';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(private router: Router, private _desing:DesignUtilityService) {
  }
  prodcuts = [
    {
      id : 1,
      name : "Tv"
    },
    {
      id : 2,
      name : "Desktop"
    },
    {
      id : 3,
      name : "Machine"
    },{
      id : 4,
      name : "Laptop"
    }
  ]

  showMe : boolean = false;
  checked : boolean = false;
  yesno = "No";
  onChange(val)
  {
    console.log(val);
    this.showMe = !this.showMe;
  }
  ngOnInit(): void {

  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

}
