import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

interface ConfirmDeleteUserData {
  userData: User
}

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class ConfirmDeleteUserComponent implements OnInit {

  confirmDeleteUserForm: FormGroup;
  durationInSeconds = 6;

  constructor( private userService: UserService,
               private _snackBar: MatSnackBar,
               @Inject(MAT_DIALOG_DATA) public data: ConfirmDeleteUserData,
               private dialogRef: MatDialogRef<ConfirmDeleteUserComponent> ) {
    this.confirmDeleteUserForm = new FormGroup({
      confirm: new FormControl('', [Validators.required, this.confirmDelete])
    });

  }

  ngOnInit(): void {
  }

  deleteUser() {
    this.userService
      .deleteUser(this.data.userData.id)
      .subscribe(data => {
        if (data.ok) {

          const snackBarConfig: MatSnackBarConfig = {
            duration: this.durationInSeconds * 1000
          }

          this.dialogRef.close({ deletedUser: true });
          this._snackBar.open(data.message, 'OK', snackBarConfig);
        } else {
          this._snackBar.open(data.message, 'dismiss');
        }
      })
  }

  confirmDelete(control: FormControl) {
    if (control.value === 'DELETE USER') {
      return null;
    } else {
      return {
        confirmDelete: true
      }
    }
  }

}
