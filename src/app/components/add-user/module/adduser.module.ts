import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// components
import { AddUserComponent } from '../add-user.component';

// material
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

// modules
import { SlideStatusUserModule } from '@components/slide-status-user/module/slide-status-user.module';

@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    SlideStatusUserModule,
    MatTooltipModule
  ],
  exports: [
    AddUserComponent
  ]
})
export class AdduserModule { }
