import { Component, OnInit } from '@angular/core';
import { Users, UserType } from 'src/app/interfaces/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  loaded: boolean;
  userListData: Users[] = [];

  constructor( private userService: UserService ) { 
    this.loaded = false;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userService
      .getUserList()
      .subscribe(res => {
        this.loaded = true;
        this.userListData = res.data;
      })
  }
}
