import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, throwError, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { filter, toArray } from 'rxjs/operators';
import { FOOTBALL_RANKING_MOCK } from '../mocks/football_ranking';
import { FAQ } from '../models/faq';
import { FootballScore } from '../models/footbal-score';
import { marked } from 'marked';
import { FAQS } from '../mocks/faq';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAllFootballScores(): Observable<FootballScore[]> {
    const scores = FOOTBALL_RANKING_MOCK
    let footballScore = []
    for (const score of scores) {
      footballScore.push({
        ...score,
        points: score.v * 3 + score.n * 1
      })
    }
    footballScore.sort((a, b) => b.points - a.points)
    return of(footballScore)

    //return of(MOCKED_USERS);

  }

  public async getAllFaqs(): Promise<FAQ[]> {
    const rawFaqs: any = await this.http.get<FAQ[]>(`${environment.apiUrl}/items/faq`).toPromise();
    //const rawFaqs: any = await of(FAQS).toPromise()
    console.log(rawFaqs.data)
    let faqs : FAQ[] = []
    for(const raw of rawFaqs.data) {
      faqs.push({
        id: raw.id,
        question: raw.question,
        answer: marked(raw.answer)
      })
    }

    return faqs

  }

  public async getPageMarkdown(name : string) : Promise<string> {
    return this.http.get(`/assets/md/${name}.md`, {responseType: 'text'}).toPromise()
  }
}
