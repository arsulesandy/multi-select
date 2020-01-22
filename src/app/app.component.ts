import { Component } from '@angular/core';

@Component({
  selector: 'mat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    placeHolder: 'Locations',
    enableSelectClear: true,
    enableSearch: true
  };
  options = [
    { name: 'ind', value: 'India' },
    { name: 'nep', value: 'Nepal', checked: true },
    { name: 'bon', value: 'Bondhar' },
    { name: 'Kat', value: 'Kathmandu', checked: true },
    { name: 'ner', value: 'Nerli' },
    { name: 'bom', value: 'Bombay' }
  ];
  changeSelection(options) {
    console.table(options);
  }
}
