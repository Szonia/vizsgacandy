import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiokom',
  templateUrl: './fiokom.component.html',
  styleUrls: ['./fiokom.component.css']
})
export class FiokomComponent implements OnInit {
  userEmail: string | null = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.userEmail = localStorage.getItem('loggedInUser');
  }

  logout() {
    localStorage.removeItem('loggedInUser'); 
    this.router.navigate(['/login']); 
  }
}










