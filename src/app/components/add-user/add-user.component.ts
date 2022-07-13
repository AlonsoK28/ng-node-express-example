import { Component, Inject, OnInit } from '@angular/core';

// angular forms
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '@interfaces/user';
import { UserService } from '@services/user.service';

// material
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  currentUserList: User[]
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;
  durationInSeconds = 6;
  statusUser:boolean;
  nextUserId: number;

  constructor( private userService: UserService,
               private _snackBar: MatSnackBar,
               private dialogRef: MatDialogRef<AddUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData ) {
    this.addUserForm = new FormGroup({
      IdUser: new FormControl({ value: '', disabled: true }, [
        Validators.required,
      ]),
      nameUser: new FormControl('', [Validators.required]),
      mailUser: new FormControl('', [Validators.required]),
      roleUser: new FormControl('', [Validators.required]),
    });
    this.statusUser = true;
   }
  

  ngOnInit(): void {
    this.getMaxId();
    this.setMaxUserId();
  }

  setMaxUserId() {
    this.addUserForm.controls['IdUser'].setValue(this.nextUserId);
  }

  getMaxId() {
    const ids = this.data.currentUserList.map(data => data.id);    
    const max = Math.max(...ids);
    this.nextUserId = max + 1;
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
    .subscribe({
      next: data => {
        if (data.ok) {
          // close dialog from another component 
          // https://stackoverflow.com/questions/57822013/close-material-dialog-from-different-component-angular

          const snackBarConfig: MatSnackBarConfig = {
            duration: this.durationInSeconds * 1000
          }

          this.dialogRef.close({ newUser: userData });
          this._snackBar.open(`${data.message} ✔️`, 'ok', snackBarConfig);
        } else {
          this._snackBar.open(`${data.message} ❌`, 'dismiss');
        }
      },
      error: (err) => {
        this._snackBar.open(err, 'close');
      },
      complete: () => {}
    });
  }

}
