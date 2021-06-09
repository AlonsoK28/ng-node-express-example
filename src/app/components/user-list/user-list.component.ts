import { AfterContentInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { User, UserType } from '@interfaces/user';

// material
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

// components
import { AddUserComponent } from '../add-user/add-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatRipple } from '@angular/material/core';


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
  @ViewChildren(MatRipple) ripple: QueryList<MatRipple>;
  @ViewChildren('myListItem', { read: ElementRef }) items: QueryList<ElementRef>;
  rootUser: number;

  constructor( public dialog: MatDialog,
               private cdref: ChangeDetectorRef ) { 
               }

  ngOnInit(): void {
    this.checkRootUser();
  }

  addUser() {
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
        this.scrollLastItem();
        this.triggerRipple();
      }
    });
  }

  deleteUser(userData:User, index:number){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      userData
    }

    const dialogRef = this.dialog.open(
      DeleteUserComponent,
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
  
  editUser(userData:User, index:number){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      userData
    };
    dialogConfig.width = '50%';
    dialogConfig.minHeight = 'calc(50vh - 90px)';
    dialogConfig.height = 'auto';

    const dialogRef = this.dialog.open(
      EditUserComponent,
      dialogConfig
    );

    dialogRef
    .afterClosed()
    .subscribe(result => {
      if (result.userEditInfo) {
        this.userListData[index] = result.userEditInfo;
        this.cdref.detectChanges();
        this.triggerRipple(index);
      }
    });
  }

  triggerRipple(index?:number) {
    const rippleConfig = { centered: true };
    if(index){
      this.ripple.get(index).launch(rippleConfig);
    }else{
      this.ripple.last.launch(rippleConfig);
    }
  }

  scrollLastItem() {
    // docs https://angular.io/api/core/QueryList
    this.items.last.nativeElement.scrollIntoView({ behavior: "smooth"});
  }

  checkRootUser() {
    this.userListData
    .forEach( ele => {
      if( ele.role === this.myUserType.ADMIN && 
          ele.name === 'system_admin' ){
        this.rootUser = ele.id;
      }
    });
  }

}
