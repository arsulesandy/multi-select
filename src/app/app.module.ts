import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiselectModule } from 'multiselect';
import { ReactiveFormsModule } from '@angular/forms';
import { MdePopoverModule } from '@material-extended/mde';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MultiselectModule,
    ReactiveFormsModule,
    MdePopoverModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
