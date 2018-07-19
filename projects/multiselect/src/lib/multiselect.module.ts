import { NgModule } from '@angular/core';
import {
    MatCardModule, MatChipsModule, MatIconModule, MatInputModule, MatSelectModule, MatToolbarModule
} from '@angular/material';
import { MdePopoverModule } from '@material-extended/mde';

import { FilterPipe } from './filter-pipe/filter.pipe';
import { MultiselectComponent } from './multiselect.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MdePopoverModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [MultiselectComponent, FilterPipe],
  exports: [MultiselectComponent]
})
export class MultiselectModule { }
