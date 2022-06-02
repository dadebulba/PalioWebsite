import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { ApiService } from 'src/app/services/api.service';
import {ChangeDetectorRef } from "@angular/core";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  title = ''
  content = ''
  calendar: any[] = []
  tournament: Map<string, any> = new Map()
  constructor(private route: ActivatedRoute, private apiService: ApiService, private changeDetectorRef: ChangeDetectorRef) { }

  async ngOnInit(): Promise<void> {
  }

  async ngAfterViewInit() : Promise<void> {
    this.route.params.subscribe(async (param) => {
      const gameName = param.id.toString()
      switch (gameName) {
        case 'calcio':
          this.title = 'Calcio a 7'
          this.calendar = await this.apiService.getCalendar('Calcio')
          this.tournament = await this.apiService.getTournaments('Calcio')
          break
        case 'saponato':
          this.title = 'Calcio saponato'
          break
        case 'volley':
          this.title = 'Acqua Volley'
          this.calendar = await this.apiService.getCalendar('Volley')
          this.tournament = await this.apiService.getTournaments('Volley')
          break
        case 'idrofobia':
          this.title = 'Idrofobia'
          break
        default:
          this.title = 'Torneo'
          break
      }
      console.log(gameName)
      this.apiService.getPageMarkdown(gameName || '').then(res => this.content = marked(res))
    })
  }

}
