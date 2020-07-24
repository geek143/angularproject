import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.scss']
})
export class BuyproductComponent implements OnInit {

  proSelect : boolean = false;
  selPro : string;
  addProduct;
  showPro : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(val)
  {
    this.proSelect = true;
    this.selPro = val;
  }

  onBtn(product)
  {
    this.showPro = true;
     this.addProduct = product
  }

  closed()
  {
     this.showPro = false;
  }

}
