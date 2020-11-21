import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import { RandomServiceService } from '../../services/random-service.service';

@Component({
  selector: 'app-rand-people',
  templateUrl: './rand-people.component.html',
  styleUrls: ['./rand-people.component.css']
})
export class RandPeopleComponent implements OnInit {


  peoples: String[];
  generatedTeams: String[][];
  numberOfTeams: number;
  constructor(private randomService: RandomServiceService) {
  }

  ngOnInit(): void {
    this.peoples = new Array();
    this.generatedTeams = new Array();
    this.peoples.push('Example Name');
  }

  trackByFn = (index: any, item: any) => {
    return index;
  }

  addName = () => {
    this.peoples.push('');
  }

  removeName = (i: number) => {
    this.peoples.splice(i, 1);
  }

  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }

  generateTeams = () => {
    this.generatedTeams = new Array();
    const tmp = [...this.peoples];
    for (let i = 0; i < this.numberOfTeams; i++) {
      const team = new Array();
      for (let j = 0; j < this.numberOfTeams; j++) {
        team.push(tmp.splice(this.randomService.randInt(0, tmp.length - 1), 1)[0]);
      }
      this.generatedTeams.push(team);
    }
    console.log(this.generatedTeams);
  }
}
