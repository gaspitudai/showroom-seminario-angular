import { Component, OnInit } from '@angular/core';
import { RopaCartService } from 'src/app/services/ropa-cart.service';
import { RopaService } from '../../models/ropa/ropa.service';
import { Ropa } from '../../models/ropa/ropa';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  ropas: Ropa[] = [];

  constructor(public cartService: RopaCartService, private ropaService: RopaService) {
    this.ropaService.getRopas().subscribe(
      ropa => this.ropas = ropa
    );
  }
  
  ngOnInit(): void {
    console.log({...this.ropas})
  }

  maxReached(msg: string): void {
    alert(msg)
  }

  addToCart(ropa: Ropa): void {
    this.cartService.addToCart(ropa);
    this.cartService._cartQuantity += ropa.quantity
    ropa.stock -= ropa.quantity
    ropa.quantity = 0
    let price = 0;
    price += ropa.price;
  }

}
