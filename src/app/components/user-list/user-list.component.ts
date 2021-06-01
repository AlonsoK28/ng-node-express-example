import { Component, Input, OnInit } from '@angular/core';
import { User, UserType } from 'src/app/interfaces/user';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  @Input() userListData: User[] = [];
  myUserType = UserType;

  constructor() { }

  ngOnInit(): void {
  }

}
