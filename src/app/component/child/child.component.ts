import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() selected : boolean = false;
  @Input() selectedProduct : string;
  @Output() addProduct = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart()
  {
    this.addProduct.emit(this.selectedProduct);
  }

}
