import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

interface EditUserData {
  userData: User
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  editUserForm: FormGroup;
  durationInSeconds = 6;

  constructor( private userService: UserService,
               private _snackBar: MatSnackBar,
               private dialogRef: MatDialogRef<EditUserComponent>,
               @Inject(MAT_DIALOG_DATA) public data: EditUserData ) {

    this.editUserForm = new FormGroup({
      IdUser: new FormControl(
        { value: this.data.userData.id, disabled: true }, 
        [Validators.required]
      ),
      nameUser: new FormControl(this.data.userData.name, [Validators.required]),
      mailUser: new FormControl(this.data.userData.mail, [Validators.required]),
      roleUser: new FormControl(this.data.userData.role, [Validators.required]),
      statusUser: new FormControl(this.data.userData.active),
    });
               }

  ngOnInit(): void {
  }

  editUser() {
    const userData: User = {
      id: this.editUserForm.controls.IdUser.value,
      name: this.editUserForm.controls.nameUser.value,
      active: this.editUserForm.controls.statusUser.value,
      mail: this.editUserForm.controls.mailUser.value,
      role: this.editUserForm.controls.roleUser.value
    };

    this.userService
      .editUser(userData)
      .subscribe(
        data => {
          if (data.ok) {
            // close dialog from another component 
            // https://stackoverflow.com/questions/57822013/close-material-dialog-from-different-component-angular

            const snackBarConfig: MatSnackBarConfig = {
              duration: this.durationInSeconds * 1000
            }

            this.dialogRef.close({ userEditInfo: userData });
            this._snackBar.open(data.message, 'OK', snackBarConfig);
          } else {
            this._snackBar.open(data.message, 'dismiss');
          }
        }
      );
  }

}
