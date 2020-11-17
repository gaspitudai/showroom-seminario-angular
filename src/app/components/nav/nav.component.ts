import { Component, OnInit } from '@angular/core';
import { RopaCartService } from 'src/app/services/ropa-cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showNav = {
    displayNone: true
  }

  constructor(public cartService: RopaCartService) {

  }

  ngOnInit(): void {
    
  }

  showNavAside(): void {
    this.showNav.displayNone ? this.showNav.displayNone = false : this.showNav.displayNone = true
  }

  showCart() {
    this.cartService._cartDisplay ? this.cartService._cartDisplay = false : this.cartService._cartDisplay = true;
  }

}
