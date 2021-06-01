import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { UserListComponent } from '../user-list.component';

// material
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatIconModule
  ],
  exports:[
    UserListComponent
  ]
})
export class UserListModule { }
