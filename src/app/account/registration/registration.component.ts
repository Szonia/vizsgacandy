import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importáljuk a szükséges formokat

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordsMatchValidator
    });
  }

  passwordsMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formValue = this.registrationForm.value;
      // Regisztrált felhasználó adatainak elmentése a localStorage-ba
      localStorage.setItem('userEmail', formValue.email);
      localStorage.setItem('userPassword', formValue.password); // Ne tedd ezt éles környezetben, csak példa!
      alert('Regisztráció sikeres!');
      this.router.navigate(['/login']);
    }
  }
}





// import { Component } from '@angular/core';
// import { Router } from '@angular/router'; 

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent {

//   constructor(private router: Router) {}

//   onSubmit(form: any) {
    
//     if (form.valid) {
      
//       this.router.navigate(['/login']);
//     }
//   }
// }


