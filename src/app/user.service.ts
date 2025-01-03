import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<Users>;
  public user$: Observable<Users>;

  constructor() {
    this.userSubject = new BehaviorSubject<any>(null);
    this.user$ = this.userSubject.asObservable();
  }

  setUser(user: Users): void {
    this.userSubject.next(user);
  }

  getUser(): Observable<Users> {
    return this.user$;
  }
}

export interface Users {
    name:"",
    surname:"",
    email:""
}