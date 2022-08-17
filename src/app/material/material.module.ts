import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
  ],
})
export class MaterialModule { }
