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
    const gameName = this.route.snapshot.paramMap.get('id')?.toString()
    switch(gameName) {
      case 'calcetto':
        this.title = 'Calcetto'
        break
      case 'saponato':
        this.title = 'Calcio saponato'
        break
      case 'volley':
        this.title = 'Volley saponato'
        break
      case 'idrofobia':
        this.title = 'Idrofobia'
        break
      default:
        this.title = 'Torneo'
        break
    }
    console.log(gameName)
    const markdownContent = await this.apiService.getPageMarkdown(gameName || '')
    this.content = marked(markdownContent)
  }

}
