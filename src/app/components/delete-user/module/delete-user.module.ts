import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { DeleteUserComponent } from '../delete-user.component';

// material
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

// angular forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DeleteUserComponent
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
    FormsModule,
    MatTooltipModule
  ],
  exports: [
    DeleteUserComponent
  ]
})
export class DeleteUserModule { }
