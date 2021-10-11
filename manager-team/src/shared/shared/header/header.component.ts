import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerMenu: Array<any> = [
    {label: "home", route: "home"},
    {label: "sobre", route: "home/sobre"},
    {label: "contato", route: "home/contato"}
  ];

  constructor(private route: Router) { 
  }

  ngOnInit() {

  }

  redirectLogin(){
    this.route.navigate(["/login"])
  }

  redirectHome(item: any){
    this.route.navigate([item.route])
  }
}
