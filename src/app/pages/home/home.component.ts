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
      image: 'niker.jpg',
      website: 'https://www.facebook.com/nikerfitness/'
    },
    {
      image: 'pe.jpg',
      website: 'https://www.pelabellers.com/'
    },
    {
      image: 'ciclofficina.jpg',
      website : 'https://ciclofficinaerrante.it/'
    },
    {
      image: 'comune.jpg',
      website : 'https://www.comune.porto-mantovano.mn.it/'
    },
    {
      image: 'taffo.jpg',
      website : 'https://www.taffofuneralservices.it/taffo-mantova/'
    },
    {
      image: 'follieacc.jpg',
      website: 'https://www.facebook.com/FollieAcconciature1/'
    },
    {
      image: 'hobbyauto.jpg',
      website: 'https://www.hobbyauto.it/'
    },
    {
      image: 'soleluna.jpg',
      website: 'https://solelunaesteticaebenessere.it'
    },
    {
      image: 'astro.jpg',
      website : 'https://www.astroforniture.it/'
    },
    {
      image: 'farmacia.jpg',
      website : 'https://www.farmaciaofficinasalute.it/'
    },
    {
      image: 'italcasa.jpg',
      website : 'https://www.italcasamantova.it/'
    }

    
  ]
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {


  }

}
