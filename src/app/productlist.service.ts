import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  // private productsApi="http://localhost:3000/termekek/"
  private productsApi="https://webshop-8fcd0-default-rtdb.europe-west1.firebasedatabase.app/termekek"
  private produtctsSub= new BehaviorSubject<any>(null)

  constructor(private http:HttpClient) {
    this.downloadProducts()
   }

  getProducts(){
    return this.produtctsSub;
  }

  private downloadProducts(){
    this.http.get(this.productsApi+".json").subscribe(
      (products:any)=>{
        // console.log(Object.keys(products))

        let tomb=[]
        for (const key in products) {
            tomb.push({id:key, db:0, ...products[key]})            
          }
          // console.log(tomb)
          this.produtctsSub.next(tomb)
        }  
    )
  }

  postProduct(product:any){
    this.http.post(this.productsApi,product).forEach(
      ()=>this.downloadProducts()
    )
  }
 putProduct(product:any){
    this.http.put(this.productsApi+product.id,product).forEach(
      ()=>this.downloadProducts()
    )
  }
 deleteProduct(product:any){
    this.http.delete(this.productsApi+product.id).forEach(
      ()=>this.downloadProducts()
    )
  }

}
