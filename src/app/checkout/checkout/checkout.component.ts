import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  order = {
    firstName: '',
    lastName: '',
    postalCode: '',
    email: '',
    houseNumber: '',
    city: '',
    phoneNumber: '',
  };
  
  successMessage: string = '';  

 
  submitOrder() {
    // A rendelés sikeres, szimulált üzenet
    console.log('Rendelés adatai:', this.order); 

    // Beállítjuk a sikeres üzenetet
    this.successMessage = 'Rendelés sikeresen elküldve!';
  }
}


