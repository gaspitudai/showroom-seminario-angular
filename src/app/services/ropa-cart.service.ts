import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { Ropa } from '../models/ropa/ropa';

@Injectable({
  providedIn: 'root'
})
export class RopaCartService {

  private _cartList: Ropa[] = [];
  cartList: BehaviorSubject<Ropa[]> = new BehaviorSubject(this._cartList);

  _cartDisplay: boolean = false;

  _cartQuantity: number = 0;

  totalPrice: number = 0;

  constructor() { }

  addToCart(ropa: Ropa) {
    let item: Ropa = this._cartList.find( val => val.name == ropa.name )
    if(!item) {
      this._cartList.push( { ... ropa } )
    } else {
      item.quantity += ropa.quantity
    }
    console.log(this._cartList)
    this.totalPrice += ropa.price*ropa.quantity;
    this.cartList.next(this._cartList)
  }

  removeFromCart(ropa: Ropa) { //Método ineficiente
    let elem = 0;
    let cont = 0;
    for(let item of this._cartList) {
      cont++;
      if(item.name == ropa.name) { 
        elem = cont;
        this._cartList.splice(ropa[elem], 1)
      }
    }
    this.cartList.next(this._cartList)
  }
  




}
