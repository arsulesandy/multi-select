import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckbox } from '@angular/material';

@Component({
  selector: 'mat-multiselect',
  templateUrl: './mat-multiselect.component.html',
  styleUrls: ['./mat-multiselect.component.scss']
})
/**
 * Multiselect Component which control a patch of screen containing multiselect dropdown control
 */
export class MatMultiselectComponent implements OnInit {
  /**
   * Input Data to be passed from parent in the following format
   * { placeHolder: 'Locations', enableSelectClear: true, enableSearch: true }
   */
  @Input() data: any;

  /**
   * Input Options to be passed from parent in the following format array
   * [ {name: 'ind', value: 'India'} ]
   */
  @Input() options: any[];

  /**
   * Output to parent for selected options
   */
  @Output() changeSelection = new EventEmitter<any[]>();

  /**
   * Child mat checkbox
   */
  @ViewChild(MatCheckbox, { static: false }) matCheckbox;

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
  constructor() { }

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
    const index = this.options.indexOf(option);
    this.options[index].checked = !this.options[index].checked;
    this.emitValue();
  }

  /**
   * Event to emit selected values to parent throgh changeSelection event emmiter
   */
  emitValue() {
    this.selectedOptions = this.options.filter(option => option.checked);
    this.multiSelect.patchValue(this.selectedOptions);
    this.evaluateStates();
    this.changeSelection.emit(this.selectedOptions);
  }

  /**
   * Event for changing the state of select all checkbox according to option's state
   * @param value checked value
   */
  changeState(value: boolean) {
    this.matSearch = '';
    this.options.forEach(option => option.checked = value);
    this.emitValue();
  }

  /**
   * Event for evaluating the state of select all checkbox according to option's state
   */
  evaluateStates() {
    this.indeterminate = false;
    if (this.selectedOptions.length === 0 && this.matCheckbox !== undefined) {
      this.matCheckbox.checked = false;
    } else if (this.options.length === this.selectedOptions.length && this.matCheckbox !== undefined) {
      this.matCheckbox.checked = true;
    } else {
      this.indeterminate = true;
    }
  }
}
