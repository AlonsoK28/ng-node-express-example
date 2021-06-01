import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { UserListComponent } from '../user-list.component';

// material
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


// 3-party
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports:[
    UserListComponent
  ]
})
export class UserListModule { }
