import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './users'
import { users } from './mock-users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAll(): Observable<User[]> {
    return of(users)
  }
}
