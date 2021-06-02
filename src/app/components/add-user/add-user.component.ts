import { Component, OnInit } from '@angular/core';

// angular forms
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

// material
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;

  constructor( private userService: UserService,
               private _snackBar: MatSnackBar,
               private dialogRef: MatDialogRef<AddUserComponent> ) {
    this.addUserForm = new FormGroup({
      IdUser: new FormControl('', [Validators.required]),
      nameUser: new FormControl('', [Validators.required]),
      mailUser: new FormControl('', [Validators.required]),
      roleUser: new FormControl('', [Validators.required]),
      statusUser: new FormControl(''),
    });
   }
  

  ngOnInit(): void {
  }

  addNewUser(){
    const userData:User = {
      id: this.addUserForm.controls.IdUser.value,
      name: this.addUserForm.controls.nameUser.value,
      active: this.addUserForm.controls.statusUser.value,
      mail: this.addUserForm.controls.mailUser.value,
      role: this.addUserForm.controls.roleUser.value

    };

    this.userService
    .addNewUser(userData)
    .subscribe(
      data =>{
        if(data.ok){
          // close dialog from another component 
          // https://stackoverflow.com/questions/57822013/close-material-dialog-from-different-component-angular
          this.dialogRef.close({ newUser: userData});
          this._snackBar.open(data.message, 'OK');
        }else{
          this._snackBar.open(data.message, 'dismiss');
        }
      }
    );
  }

}
