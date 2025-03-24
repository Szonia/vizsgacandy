import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  // 👉 Helyes: csak 1 paraméter – a candy objektum
  addToCart(candy: any) {
    console.log("addToCart hívva");
    const existingItem = this.cart.find(item => item.id === candy.id);
    console.log("Létező elem a kosárban:", existingItem);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      // Ha nincs quantity, beállítjuk 1-re
      if (!candy.quantity) candy.quantity = 1;
      this.cart.push(candy);
    }
  }

  getCartItems() {
    return this.cart;
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeFromCart(productId: string) {
    this.cart = this.cart.filter(item => item.id !== productId);
  }
}
