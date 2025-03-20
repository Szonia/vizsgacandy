import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  order: any = {};
  isSubmitting = false;
  successMessage: string | null = null;

  submitOrder(form: any) {
    // Only proceed if the form is valid and not already submitting
    if (form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.successMessage = 'Rendelés sikeresen leadva!';

      // Simulate server delay
      setTimeout(() => {
        this.isSubmitting = false; // Reset submitting state
        form.resetForm(); // Optional: reset the form after submission
      }, 500);
    }
  }
}




// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-checkout',
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.css'],
// })
// export class CheckoutComponent {
//   order = {
//     firstName: '',
//     lastName: '',
//     postalCode: '',
//     email: '',
//     houseNumber: '',
//     city: '',
//     phoneNumber: '',
//   };
  
//   successMessage: string = '';  

 
//   submitOrder() {
//     // A rendelés sikeres, szimulált üzenet
//     console.log('Rendelés adatai:', this.order); 

//     // Beállítjuk a sikeres üzenetet
//     this.successMessage = 'Rendelés sikeresen elküldve!';
//   }
// }


