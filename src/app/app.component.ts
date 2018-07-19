import { Component } from '@angular/core';

@Component({
  selector: 'ms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ms';
  options = ['India', 'Nepal', 'Bondhar'];
  changeSelection(options){
    console.log(options);
  }
}
