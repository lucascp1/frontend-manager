import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  redirectForm(){
    this.route.navigate(["formsteps"]);
  }
}
