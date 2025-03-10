import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private kosar:any=[]
  private kosarSub = new BehaviorSubject<any>([])

private productsApi="https://webshop-X8fcd0-default-rtdb.europe-west1.firebasedatabase.app/megrendelesek"

  constructor(private http:HttpClient) { }

  order(){
    let body={
      userName:"Noel",
      address:"2220 Vecsés Lőrinci út 38.",
      order:this.kosar,
      status:"Felvéve",
      date:Date.now
    }

    this.http.post(this.productsApi+".json", body).subscribe({
      next: (res)=>{
        console.log("Megrendelés leadva", res)
        this.deleteCart()
      },
      error:(err)=>console.log(err)
    }
    )

  }

  deleteCart(){
    this.kosar=[]
    this.kosarSub.next(this.kosar)
  }

  getCart(){
    return this.kosarSub
  }

  addProduct(product:any){
    let x= this.kosar.findIndex( (p:any)=>p.id==product.id)
    if (x!=-1)  this.kosar[x].db=product.db  
    else {
      let termek = {...product}
      delete termek.leiras
      delete termek.keplink
      delete termek.mennyiseg
      this.kosar.push(termek)
    }
    this.kosarSub.next(this.kosar)
  }
}
