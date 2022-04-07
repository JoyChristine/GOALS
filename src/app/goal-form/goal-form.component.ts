import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
 //created a new property newGoal and assigned it to Goal class to take the format of creating goals
  newGoal = new Goal(0,"","",new Date())
  constructor() { }

  ngOnInit(): void {
  }

}
