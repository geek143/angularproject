import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateresto',
  templateUrl: './updateresto.component.html',
  styleUrls: ['./updateresto.component.scss']
})
export class UpdaterestoComponent implements OnInit {

  updateForm = new FormGroup({
    name : new FormControl(null),
    address : new FormControl(null),
    email : new FormControl(null)
  })
  constructor(
    private resto: RestoService,
    private _activated: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this._activated.snapshot.params.id);
    this.resto.updateResto(this._activated.snapshot.params.id)
    .subscribe( (data => {
      this.updateForm = new FormGroup({
        name : new FormControl(data['name']),
        address : new FormControl(data['address']),
        email : new FormControl(data['email'])
      })
    }))
  }

  updatForm()
  {
     this.resto.newUpdateResto(this._activated.snapshot.params.id,this.updateForm.value)
     .subscribe( (data)=>{
        console.log(data);
        this.router.navigate(['/resturants/list']);
     })
  }

}
