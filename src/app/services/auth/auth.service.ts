

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registeredUser: any = null;

  constructor() {}

  
  register(userData: { firstName: string; lastName: string; email: string; password: string; confirmPassword: string; phone: string }) {
    this.registeredUser = { ...userData };
    console.log('Felhasználó regisztrálva:', this.registeredUser);
  }

  
  login(email: string, password: string): boolean {
    if (this.registeredUser && this.registeredUser.email === email && this.registeredUser.password === password) {
      console.log('Bejelentkezve:', this.registeredUser);
      return true;
    }
    return false;
  }

  
  isRegistered(): boolean {
    return this.registeredUser !== null;
  }

  
  getRegisteredUser() {
    return this.registeredUser;
  }

  
  logout(): void {
    this.registeredUser = null;  
    console.log('Felhasználó kijelentkezve');
  }
}


