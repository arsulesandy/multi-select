import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckbox } from '@angular/material';

@Component({
  selector: 'multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  @Input() data: any;
  @Input('options') primalOptions: any[];
  @Output() changeSelection = new EventEmitter<any[]>();
  @ViewChild(MatCheckbox) matCheckbox;
  multiSelect = new FormControl();
  selectedOptions = [];
  indeterminate: boolean;
  matSearch = '';

  
  constructor() { }

  ngOnInit() {
    this.emitValue();
  }

  optionClick(option) {
    const index = this.primalOptions.indexOf(option);
    this.primalOptions[index].checked = !this.primalOptions[index].checked;
    this.emitValue();
  }

  emitValue(){
    this.selectedOptions = this.primalOptions.filter(option => option.checked);
    this.multiSelect.patchValue(this.selectedOptions);
    this.evaluateStates();
    this.changeSelection.emit(this.selectedOptions);
  }

  changeState(value) {
    this.matSearch = '';
    this.primalOptions.forEach(option => option.checked = value);
    this.emitValue();
  }

  evaluateStates() {
    this.indeterminate = false;
    if(this.selectedOptions.length == 0 && this.matCheckbox != undefined) {
      this.matCheckbox.checked = false;
    } else if(this.primalOptions.length == this.selectedOptions.length  && this.matCheckbox != undefined) {
      this.matCheckbox.checked = true;
    } else {
      this.indeterminate = true;
    }
  }
}
