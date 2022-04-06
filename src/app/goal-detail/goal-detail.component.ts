//child component of goal.component
//receives data from parent(goalcomponent) through input property binding

import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
// goal is the property that will undergo input property binding
  
  @Input() goal!: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
