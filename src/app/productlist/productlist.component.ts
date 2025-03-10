
import { Component } from '@angular/core';
import { ProductlistService } from '../productlist.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  products: any[] = [];

  constructor(private pserv: ProductlistService, private cartServ: CartService) {
    this.pserv.getProducts().subscribe(
      (termekek) => this.products = termekek
    );
  }

  addProduct(product: any) {
    this.cartServ.addProduct(product);
  }

  // *** Termékek rendezése ár szerint ***
  sortProducts(order: string) {
    if (order === 'low-to-high') {
      this.products.sort((a, b) => a.ar - b.ar);
    } else if (order === 'high-to-low') {
      this.products.sort((a, b) => b.ar - a.ar);
    }
  }
}
