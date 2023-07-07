import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  isLoggedIn: boolean = false;

  login(password: string) {
    this.isLoggedIn = password === "K@8920";
  }

  logout() {
    this.isLoggedIn = false;
  }
}
