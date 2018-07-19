import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ms-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  @Input() placeHolder: any;
  @Input() options: any[];
  @Output() changeSelection = new EventEmitter<any[]>();
  multiSelect = new FormControl();

  
  constructor() { }

  ngOnInit() {
    this.multiSelect.patchValue(this.options);
  }

  remove(index) {
    console.log(index);
    this.multiSelect.value.splice(index,1);
    this.multiSelect.patchValue(this.multiSelect.value);
    this.emitValue();
  }

  emitValue(){
    this.changeSelection.emit(this.multiSelect.value);
  }
}
