import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { NoUsersComponent } from '../no-users.component';

// material
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    NoUsersComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    NoUsersComponent
  ]
})
export class NoUsersModule { }
