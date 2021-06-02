import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { User, UserType } from 'src/app/interfaces/user';

// material
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

// components
import { AddUserComponent } from '../add-user/add-user.component';
import { UserService } from 'src/app/services/user.service';
import { ConfirmDeleteUserComponent } from '../confirm-delete-user/confirm-delete-user.component';


export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  @Input() userListData: User[] = [];
  myUserType = UserType;

  constructor( public dialog: MatDialog,
               private cdref: ChangeDetectorRef,
                private userService: UserService ) { }

  ngOnInit(): void {
  }

  addNewUser() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.minHeight = 'calc(50vh - 90px)';
    dialogConfig.height = 'auto';

    const dialogRef = this.dialog.open(
      AddUserComponent,
      dialogConfig
    );

    dialogRef
    .afterClosed()
    .subscribe( result => {
      console.log(`Dialog result: ${result}`);
      if(result){
        this.userListData.push((result.newUser));
        this.cdref.detectChanges();
      }
    });
  }

  deleteUser(userData:User, index:number){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      userData
    }

    const dialogRef = this.dialog.open(
      ConfirmDeleteUserComponent,
      dialogConfig
    );

    dialogRef
    .afterClosed()
    .subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result.deletedUser) {
        this.userListData.splice(index, 1);
        this.cdref.detectChanges();
      }
    });
  }

}
