import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.scss']
})
export class NewChildComponent implements OnInit {

  constructor(private _services: DesignUtilityService) { }

  users;
  ngOnInit(): void {
    this._services.newUsers;
  }

  @Input() boxColor = "red";
  @Input() placeHolderText;
  @Output() inpuValue = new EventEmitter<any>();


  onCreate(myInput)
  {
    if(myInput.value.length > 0)
    {

      this.inpuValue.emit(myInput.value);
    }

  }

}
