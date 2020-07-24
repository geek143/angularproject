import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderserService } from 'src/app/appServices/headerser.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('valueFrom') valueFrom:NgForm;
  constructor(private _header:HeaderserService,private router:Router) { }
  username = "";
  password = "";
  ngOnInit(): void {

  }

  myError;
  onSubmit(form:NgForm)
  {
    console.log(this.valueFrom);
     console.log(form.value);
     if(form.value.userDeatils.password === "123")
        {
          this._header.loggedIn.next(form.value.userDeatils.password);
          this.router.navigate(['home']);
        }
        else
        {
          this.myError = "Password Wrong";
        }
     form.reset();

  }

  setUsername()
  {
     this.valueFrom.form.patchValue({
      userDeatils : {
        password : "123"
      }

     })
  }

}
