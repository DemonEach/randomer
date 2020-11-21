import { Component, OnInit } from '@angular/core';
import { RandomServiceService } from '../../services/random-service.service';

@Component({
  selector: 'app-rand-int',
  templateUrl: './rand-int.component.html',
  styleUrls: ['./rand-int.component.css']
})
export class RandIntComponent implements OnInit {

  randomed: any;

  constructor(private randomService: RandomServiceService) { }

  ngOnInit(): void {
  }

  randInt = (min: number, max: number) => {
    const randomVal = this.randomService.randInt(min, max);
    if (!isNaN(randomVal)) {
      this.randomed = randomVal;
    } else {
      this.randomed = 'Enter the numbers!';
    }
  }
}
