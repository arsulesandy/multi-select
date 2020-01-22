import { FilterPipe } from './../../projects/mat-multiselect/src/lib/filter-pipe/filter.pipe';
import { MatMultiselectModule } from './../../projects/mat-multiselect/src/lib/mat-multiselect.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
    MatMultiselectModule,
    ReactiveFormsModule,
    MdePopoverModule

  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
