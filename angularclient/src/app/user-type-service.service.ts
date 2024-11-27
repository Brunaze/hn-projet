import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usertype } from './usertype';

@Injectable({
  providedIn: 'root'
})
export class UserTypeServiceService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public findAllUserType(): Observable<Usertype[]> {
    return this.http.get<Usertype[]>(this.url+'usertypes');
  }

  public save(usertype: Usertype): Observable<void> {
    return this.http.post<void>(this.url+'usertypes', usertype, {responseType: 'text' as 'json'});
  }

  public update(usertype: Usertype): Observable<Usertype> {
    return this.http.put<Usertype>(this.url+'usertype-update', usertype, {responseType: 'text' as 'json'});
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(this.url+`usertype-delete/${id}`);
  }
}
