import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { EditUserComponent } from '../edit-user.component';

// angular forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// material
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    EditUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    MatSnackBarModule,
    
  ],
  exports: [
    EditUserComponent
  ]
})
export class EditUserModule { }
