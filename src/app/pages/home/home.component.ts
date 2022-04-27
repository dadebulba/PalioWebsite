import { Component, OnInit } from '@angular/core';
import { tns } from "node_modules/tiny-slider/src/tiny-slider"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [
    {path: "../../../assets/images/sponsors/LOGO_NIKER_FITNESS.jpg"},
    {path: "../../../assets/images/sponsors/follie_acc.jpg"},
    {path: "../../../assets/images/sponsors/SOLELUNA.jpg"},
    {path: "../../../assets/images/sponsors/hobby-auto.jpg"},
  ]

  cellsToShow = 2
  cellHeight = 500
  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth < 500) {
      this.cellsToShow = 1
      this.cellHeight = (window.innerWidth/16)*9
    }
    else {
      this.cellsToShow = 2
      this.cellHeight = ((window.innerWidth/16)*9)/2
    }
  }

  ngAfterViewInit(){


  }

}
