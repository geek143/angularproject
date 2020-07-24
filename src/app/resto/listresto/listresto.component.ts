import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listresto',
  templateUrl: './listresto.component.html',
  styleUrls: ['./listresto.component.scss']
})
export class ListrestoComponent implements OnInit {

   /*
    Property Resturnats
  */
  page: number = 1;
  constructor(
    private resto: RestoService,
    private _activated: ActivatedRoute
  ) { }

  collection : any = [];
  id;
  order: string = 'name';
  ngOnInit(): void {
    this.resto.getListing()
    .subscribe((data) =>{
      this.collection = data
    })
  }

  delRestio(val)
  {
    // this.collection.splice(val -1, 1)
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.collection.splice(val -1, 1);
        this.resto.delListing(val)
        .subscribe( (data) => {
          console.log(data);
        })
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })


  }


}
