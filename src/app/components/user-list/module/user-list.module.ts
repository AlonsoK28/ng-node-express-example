import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { UserListComponent } from '../user-list.component';

// modules
import { AdduserModule } from '@components/add-user/module/adduser.module'
import { DeleteUserModule } from '@components/delete-user/module/delete-user.module';
import { EditUserModule } from '@components/edit-user/module/edit-user.module';

// material
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';

// 3-party
import { FlexLayoutModule } from '@angular/flex-layout';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
};


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
    MatDialogModule,
    MatBadgeModule,
    MatTooltipModule,
    DeleteUserModule,
    EditUserModule,
    MatRippleModule
  ],
  exports:[
    UserListComponent
  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig }
  ]
})
export class UserListModule { }
