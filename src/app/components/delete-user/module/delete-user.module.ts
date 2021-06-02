import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ConfirmDeleteUserComponent } from '../delete-user.component';

// material
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';

// angular forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConfirmDeleteUserComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatInputModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  exports: [
    ConfirmDeleteUserComponent
  ]
})
export class ConfirmDeleteUserModule { }
