import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User} from '@interfaces/user';
import { UserService } from '@services/user.service';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  loaded: boolean;
  error: boolean;
  loading: boolean;
  userListData: User[] = [];
  noUsers:boolean;

  constructor(
    private userService: UserService, 
    private _snackBar: MatSnackBar ) {
    this.loaded = false;
    this.loading = false;
    this.noUsers = false;
    this.error = false;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.userService
      .getUserList()
      .subscribe({
        next: res => {
          if (res.ok) {
            this.loaded = true;
            this.userListData = res.data;
          } else {
            this.noUsers = true;
          }
        },
        error: (err) => {
          this.loading = false;
          this._snackBar.open(err, 'close');
          this.noUsers = true;
        },
        complete: () => {
          this.loading = false;
        }
      })
  }
}
