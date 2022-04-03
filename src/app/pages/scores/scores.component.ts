import { Component, OnInit } from '@angular/core';
import { FootballScore } from 'src/app/models/footbal-score';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  public teamScores : FootballScore[] = []

  constructor(private apiService : ApiService) {
    this.apiService.getAllFootballScores()
    .subscribe((result : FootballScore[]) => {
      this.teamScores = result
    })
   }

  ngOnInit(): void {

  }

}
