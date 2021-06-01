import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interfaces
import { UserApi } from '../interfaces/user-api';

// environment
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  getUserList() {
    const url = `${environment.apiEndpoint}/get-users`;
    return this.http.get<UserApi>(url);
  }


}
