import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() currentStep: number = 1;
  @Input() totalSteps: number = 3;
  public stepsArray: Array<any> = new Array(this.totalSteps); 

  constructor() {}
  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChange){
    this.stepsArray = new Array(this.totalSteps); 

  }
}


