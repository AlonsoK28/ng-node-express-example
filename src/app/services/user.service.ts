import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interfaces
import { UserApiResponseList, UserApiResponseGeneric } from '../interfaces/user-api';

// environment
import { environment } from '../../environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  getUserList() {
    const url = `${environment.apiEndpoint}/get-users`;
    return this.http.get<UserApiResponseList>(url);
  }

  addNewUser(newUser: User){
    const url = `${environment.apiEndpoint}/add-user`;
    const body = {
      id: newUser.id,
      name: newUser.name,
      active: newUser.active,
      mail: newUser.mail,
      role: newUser.role
    };
    return this.http.put<UserApiResponseGeneric>(url, body);
  }

  deleteUser(id:number){
    const url = `${environment.apiEndpoint}/delete-user/${id}`;
    return this.http.delete<UserApiResponseGeneric>(url);
  }

}
