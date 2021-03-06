import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDividerModule, MatIconModule,
  MatInputModule, MatSelectModule, MatToolbarModule
} from '@angular/material';
import { MdePopoverModule } from '@material-extended/mde';

import { FilterPipe } from './filter-pipe/filter.pipe';
import { MatMultiselectComponent } from './mat-multiselect.component';

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
    MatCheckboxModule,
    MatDividerModule,
    CommonModule,
    FormsModule
  ],
  declarations: [MatMultiselectComponent, FilterPipe],
  exports: [MatMultiselectComponent]
})
/**
 * Multi Select Module
 */
export class MatMultiselectModule { }
