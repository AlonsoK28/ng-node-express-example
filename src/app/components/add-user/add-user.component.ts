import { Component, OnInit } from '@angular/core';

// angular forms
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

// material
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;


  constructor( private userService: UserService,
               private _snackBar: MatSnackBar ) {
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
      active: true,
      mail: this.addUserForm.controls.mailUser.value,
      role: this.addUserForm.controls.roleUser.value

    };

    this.userService
      .addNewUser(userData)
    .subscribe(
      data =>{
        if(data.ok){
          this._snackBar.open(data.message, 'OK');
        }else{
          this._snackBar.open(data.message, 'Dismiss');
        }
      }
    );
  }

}
