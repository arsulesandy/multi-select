import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckbox } from '@angular/material';

@Component({
  selector: 'mat-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
/**
 * Multiselect Component which control a patch of screen containing multiselect dropdown control
 */
export class MultiselectComponent implements OnInit {
  /**
   * Input Data to be passed from parent in the following format
   * { placeHolder: 'Locations', enableSelectClear: true, enableSearch: true }
   */
  @Input() data: any;

  /**
   * Input Options to be passed from parent in the following format array
   * [ {name: 'ind', value: 'India'} ]
   */
  @Input('options') primalOptions: any[];

  /**
   * Output to parent for selected options
   */
  @Output() changeSelection = new EventEmitter < any[] > ();

  /**
   * Child mat checkbox
   */
  @ViewChild(MatCheckbox) matCheckbox;

  /**
   * form control for multiselect dropdown
   */
  multiSelect = new FormControl();

  /**
   * selected options in dropdown component
   */
  selectedOptions = [];

  /**
   * indeterminate state od select all checkbox
   */
  indeterminate: boolean;

  /**
   * input search text
   */
  matSearch = '';

  /**
   * Constructor
   */
  constructor() {}

  /**
   * Angular lifecycle event : run once after ngOnChanges
   */
  ngOnInit() {
      this.emitValue();
  }

  /**
   * Event for option click in multiselect dropdown
   * @param option selected option in multiselect dropdown
   */
  optionClick(option) {
      const index = this.primalOptions.indexOf(option);
      this.primalOptions[index].checked = !this.primalOptions[index].checked;
      this.emitValue();
  }

  /**
   * Event to emit selected values to parent throgh changeSelection event emmiter
   */
  emitValue() {
      this.selectedOptions = this.primalOptions.filter(option => option.checked);
      this.multiSelect.patchValue(this.selectedOptions);
      this.evaluateStates();
      this.changeSelection.emit(this.selectedOptions);
  }

  /**
   * Event for changing the state of select all checkbox according to option's state
   * @param value 
   */
  changeState(value) {
      this.matSearch = '';
      this.primalOptions.forEach(option => option.checked = value);
      this.emitValue();
  }

  /**
   * Event for evaluating the state of select all checkbox according to option's state
   */
  evaluateStates() {
      this.indeterminate = false;
      if (this.selectedOptions.length == 0 && this.matCheckbox != undefined) {
          this.matCheckbox.checked = false;
      } else if (this.primalOptions.length == this.selectedOptions.length && this.matCheckbox != undefined) {
          this.matCheckbox.checked = true;
      } else {
          this.indeterminate = true;
      }
  }
}