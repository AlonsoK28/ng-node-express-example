import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interfaces
import { UserApiResponseList, UserApiResponseGeneric } from '@interfaces/user-api';

// environment
import { environment } from '@environment';
import { User } from '@interfaces/user';

// rxjs
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  getUserList() {
    const url = `${environment.apiEndpoint}/get-users`;
    return this.http.get<UserApiResponseList>(url).pipe(delay(1300));
  }

  addUser(user: User){
    const url = `${environment.apiEndpoint}/add-user`;
    const body = {
      id: user.id,
      name: user.name,
      active: user.active,
      mail: user.mail,
      role: user.role
    };
    return this.http.put<UserApiResponseGeneric>(url, body);
  }

  deleteUser(id:number){
    const url = `${environment.apiEndpoint}/delete-user/${id}`;
    return this.http.delete<UserApiResponseGeneric>(url);
  }

  editUser(user: User){
    const url = `${environment.apiEndpoint}/edit-user`;
    const body = {
      id: user.id,
      name: user.name,
      active: user.active,
      mail: user.mail,
      role: user.role
    };
    return this.http.post<UserApiResponseGeneric>(url, body);
  }

}
