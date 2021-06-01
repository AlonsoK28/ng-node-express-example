import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// interfaces
import { Users } from '../interfaces/users';

// environment
import { environment } from '../../environments/environment';
import { UsersApi } from '../interfaces/users-api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  getUserList() {
    const url = `${environment.apiEndpoint}/get-users`;
    return this.http.get<UsersApi>(url);
  }


}
