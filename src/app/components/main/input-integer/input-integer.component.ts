import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  @Input()
  quantity: number;
  
  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();
  
  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(): void {
    if(this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit("Se alcanzó el máximo");
    }
  }

  downQuantity(): void {
    if(this.quantity > 0)
      this.quantity--;
      this.quantityChange.emit(this.quantity);
  }

}
