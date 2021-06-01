import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';

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


  @Input() userListData: Users[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
