import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { UserListComponent } from '../user-list.component';

// modules
import { AdduserModule } from '../../add-user/module/adduser.module'

// material
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


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
    MatButtonModule,
    AdduserModule,
    MatDialogModule
  ],
  exports:[
    UserListComponent
  ]
})
export class UserListModule { }
