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
  noUsers:boolean;

  constructor( private userService: UserService ) {
    this.loaded = false;
    this.noUsers = false;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userService
      .getUserList()
      .subscribe(res => {
        if(res.ok){
          this.loaded = true;
          this.userListData = res.data;
        }else{
          this.noUsers = true;
        }
      })
  }
}
