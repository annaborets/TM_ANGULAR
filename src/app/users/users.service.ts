import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { RawUser, User } from './users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);


      console.log(`${operation} failed: ${error.message}`);


      return of(result as T);
    };
  }

  getAll(): Observable<User[]> {
    return this.http.get<RawUser[]>(this.usersUrl)
      .pipe(
        map(users => users.map(this.formatUserfromApi)),
        catchError(this.handleError<User[]>('getAll', []))
      )
  }

  formatUserfromApi(user: RawUser): User {
    return {
      id: user.id,
      firstname: user.name.split(' ')[0],
      lastname: user.name.split(' ')[1],
      email: user.email,
      phone: user.phone,
    }
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url).pipe(
      catchError(this.handleError<User>('deleteUser'))
    )
  }

  postUser(user: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(this.usersUrl, user).pipe(
      catchError(this.handleError<User>('createUser'))
    )
  }
}
