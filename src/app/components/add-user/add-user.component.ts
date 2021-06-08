import { Component, OnInit } from '@angular/core';

// angular forms
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '@interfaces/user';
import { UserService } from '@services/user.service';

// material
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;
  durationInSeconds = 6;
  statusUser:boolean;

  constructor( private userService: UserService,
               private _snackBar: MatSnackBar,
               private dialogRef: MatDialogRef<AddUserComponent> ) {
    this.addUserForm = new FormGroup({
      IdUser: new FormControl('', [Validators.required]),
      nameUser: new FormControl('', [Validators.required]),
      mailUser: new FormControl('', [Validators.required]),
      roleUser: new FormControl('', [Validators.required]),
    });
    this.statusUser = true;
   }
  

  ngOnInit(): void {
  }

  addUser(){
    const userData:User = {
      id: this.addUserForm.controls.IdUser.value,
      name: this.addUserForm.controls.nameUser.value,
      active: this.statusUser,
      mail: this.addUserForm.controls.mailUser.value,
      role: this.addUserForm.controls.roleUser.value

    };

    this.userService
    .addUser(userData)
    .subscribe(
      data =>{
        if(data.ok){
          // close dialog from another component 
          // https://stackoverflow.com/questions/57822013/close-material-dialog-from-different-component-angular

          const snackBarConfig: MatSnackBarConfig = {
            duration: this.durationInSeconds * 1000
          }

          this.dialogRef.close({ newUser: userData});
          this._snackBar.open(data.message, 'OK', snackBarConfig);
        }else{
          this._snackBar.open(data.message, 'dismiss');
        }
      }
    );
  }

}
