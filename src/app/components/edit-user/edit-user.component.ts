import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
// interfaces
import { User } from '@interfaces/user';
// services
import { UserService } from '@services/user.service';

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
  statusUser: boolean;

  constructor( private userService: UserService,
               private _snackBar: MatSnackBar,
               private dialogRef: MatDialogRef<EditUserComponent>,
               @Inject(MAT_DIALOG_DATA) public data: EditUserData ) {

                this.statusUser = this.data.userData.active;

                this.editUserForm = new FormGroup({
                  IdUser: new FormControl(
                    { value: this.data.userData.id, disabled: true }, 
                    [Validators.required]
                  ),
                  nameUser: new FormControl(this.data.userData.name, [Validators.required]),
                  mailUser: new FormControl(this.data.userData.mail, [Validators.required]),
                  roleUser: new FormControl(this.data.userData.role, [Validators.required])
                });
                
               }

  ngOnInit(): void {
  }

  editUser() {
    const userData: User = {
      id: this.editUserForm.controls.IdUser.value,
      name: this.editUserForm.controls.nameUser.value,
      active: this.statusUser,
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
            this._snackBar.open(`${data.message} ✔️`, 'ok', snackBarConfig);
          } else {
            this._snackBar.open(`${data.message} ❌`, 'dismiss');
          }
        }
      );
  }

  setControlListeners() {
    this.editUserForm
    .controls
    .statusUser
    .valueChanges
    .subscribe(data => {
      this.statusUser = data;
    })
  }

}
