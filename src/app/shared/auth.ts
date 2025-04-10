import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {
    const storedStatus = localStorage.getItem('isLoggedIn');
    if (storedStatus === 'true') {
      this.isLoggedInSubject.next(true);
    }
  }

  login() {
    this.isLoggedInSubject.next(true);
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    this.isLoggedInSubject.next(false);
    localStorage.removeItem('token');
  }
}
