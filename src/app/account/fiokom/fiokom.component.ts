import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiokom',
  templateUrl: './fiokom.component.html',
  styleUrls: ['./fiokom.component.css']
})
export class FiokomComponent implements OnInit {
  userEmail: string = 'email@example.com'; // Alapértelmezett email

  constructor(private router: Router) {}

  ngOnInit() {
    const storedEmail = localStorage.getItem('loggedInUser');
    this.userEmail = storedEmail ? storedEmail : 'email@example.com';
  }

  editProfile() {
    console.log('Profil szerkesztése');
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}




// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-fiokom',
//   templateUrl: './fiokom.component.html',
//   styleUrls: ['./fiokom.component.css']
// })
// export class FiokomComponent implements OnInit {
// editProfile() {
// throw new Error('Method not implemented.');
// }
//   userEmail: string | null = '';

//   constructor(private router: Router) {}

//   ngOnInit() {
//     this.userEmail = localStorage.getItem('loggedInUser');
//   }

//   logout() {
//     localStorage.removeItem('loggedInUser'); 
//     this.router.navigate(['/login']); 
//   }
// }










