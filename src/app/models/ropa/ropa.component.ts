import { Component, OnInit } from '@angular/core';
import { Ropa } from './ropa';
import { RopaService } from './ropa.service';
@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html'
})
export class RopaComponent implements OnInit {

  ropas: Ropa[];

  constructor(private ropaService: RopaService) { }

  ngOnInit(): void {
    this.ropaService.getRopas().subscribe( 
      ropas => this.ropas = ropas 
    );
  } 

}
