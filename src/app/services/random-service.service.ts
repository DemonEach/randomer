import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomServiceService {

  constructor() { }

  randInt = (min: number, max: number) => {
    if (!isNaN(min) && !isNaN(max)) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    } else {
      return NaN;
    }
  }
}
