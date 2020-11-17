import { Injectable } from '@angular/core';
import { Ropa } from './ropa';
import { ROPAS } from './ropas.json'
import { Observable,of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RopaService {

  constructor() { }

  getRopas(): Observable<Ropa[]> {
    return of(ROPAS)
  }


}
