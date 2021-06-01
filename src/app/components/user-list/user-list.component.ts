import { Component, Input, OnInit } from '@angular/core';
import { User, UserType } from 'src/app/interfaces/user';

// material
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

// components
import { AddUserComponent } from '../add-user/add-user.component';


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

  constructor( public dialog: MatDialog ) { }

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

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });


  }

}
