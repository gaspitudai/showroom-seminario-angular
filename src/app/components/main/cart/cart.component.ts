import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RopaCartService } from 'src/app/services/ropa-cart.service';
import { Ropa } from '../../../models/ropa/ropa';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Ropa[]>;

  showCart = {
    displayNone: true
  }

  constructor(public cartService: RopaCartService) {
    this.cartList$ = cartService.cartList.asObservable();
  }

  ngOnInit(): void {
  }

  showListCart(): void {
    this.showCart.displayNone ? this.showCart.displayNone = false : this.showCart.displayNone = true
  }

  hideCart() {
    this.cartService._cartDisplay = false;
  }

  removeFromCart(ropa: Ropa): void {
    this.cartService.removeFromCart(ropa);
    this.cartService._cartQuantity -= ropa.quantity
    ropa.stock += ropa.quantity
  }

}
