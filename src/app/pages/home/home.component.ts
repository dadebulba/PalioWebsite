import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../../../app/models/sponsor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sponsors: Sponsor[] = [
    {
      image: 'LOGO_NIKER_FITNESS.jpg',
      website: 'https://www.facebook.com/nikerfitness/'
    },
    {
      image: 'pe.jpg',
      website: 'https://www.pelabellers.com/'
    },
    {
      image: 'follieacc.jpg',
      website: 'https://www.facebook.com/FollieAcconciature1/'
    },
    {
      image: 'hobby-auto.jpg',
      website: 'https://www.hobbyauto.it/'
    },
    {
      image: 'SOLELUNA.png',
      website: 'https://solelunaesteticaebenessere.it'
    }
  ]
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {


  }

}
