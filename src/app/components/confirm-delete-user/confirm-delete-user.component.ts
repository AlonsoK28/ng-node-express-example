import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

interface ConfirmDeleteUserData {
  userData: User
}

@Component({
  selector: 'app-confirm-delete-user',
  templateUrl: './confirm-delete-user.component.html',
  styleUrls: ['./confirm-delete-user.component.scss']
})
export class ConfirmDeleteUserComponent implements OnInit {

  confirmDeleteUserForm: FormGroup;

  constructor( private userService: UserService,
               private _snackBar: MatSnackBar,
               @Inject(MAT_DIALOG_DATA) public data: ConfirmDeleteUserData ) {
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
          this._snackBar.open(data.message, 'OK');
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
