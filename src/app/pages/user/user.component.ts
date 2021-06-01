import { Component, OnInit } from '@angular/core';
import { User} from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  loaded: boolean;
  userListData: User[] = [];

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
