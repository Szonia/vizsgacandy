import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    const formValue = this.loginForm.value;
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    console.log('Beírt email:', formValue.email);
    console.log('Beírt jelszó:', formValue.password);
    console.log('Mentett email:', storedEmail);
    console.log('Mentett jelszó:', storedPassword);

    if (formValue.email === storedEmail && formValue.password === storedPassword) {
      localStorage.setItem('loggedInUser', formValue.email); 
      console.log('Sikeres bejelentkezés, mentett email:', localStorage.getItem('loggedInUser'));
      this.router.navigate(['/fiokom']); 
    } else {
      alert('Hibás email vagy jelszó!');
    }
  }
}




