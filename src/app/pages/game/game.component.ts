import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  title = ''
  content = ''
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(param => {
      const gameName = param.id.toString()
    switch(gameName) {
      case 'calcio':
        this.title = 'Calcio a 7'
        break
      case 'saponato':
        this.title = 'Calcio saponato'
        break
      case 'volley':
        this.title = 'Volley acquatico'
        break
      case 'idrofobia':
        this.title = 'Idrofobia'
        break
      default:
        this.title = 'Torneo'
        break
    }
    console.log(gameName)
    this.apiService.getPageMarkdown(gameName || '').then( res => this.content = marked(res))
    }) 
    
  }

}
