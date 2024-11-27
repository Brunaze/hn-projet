import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url+'users');
  }

  public save(user: User): Observable<void> {
    return this.http.post<void>(this.url+'users', user);
  }

  public update(user: User): Observable<User> {
    return this.http.put<User>(this.url+'user-update', user, {responseType: 'text' as 'json'});
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(this.url+`user-delete/${id}`);
  }
}
