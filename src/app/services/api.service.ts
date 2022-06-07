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

  public async getCalendar(kind: 'Volley' | 'Calcio'): Promise<any[]> {
    const rawCalendar: any = await this.http.get(`${environment.apiUrl}/items/Calendario`).toPromise();
    let calendar = []

    if (kind == 'Calcio') {
      calendar = rawCalendar.data.filter((cal: any) => cal.TORNEO == 'Calcio a 7')
    }
    else {
      calendar = rawCalendar.data.filter((cal: any) => cal.TORNEO == 'Acqua Volley')
    }
    
    calendar.sort((a:any, b:any) => new Date(a.Data).getTime() - new Date(b.Data).getTime())
    
    for(const cal of calendar) {
      cal.Data = new Date(cal.Data).toLocaleString()
    }

    return calendar
  }

  public async getTournaments(kind: 'Volley' | 'Calcio'): Promise<Map<string, any>> {
    const rawTournament: any = await this.http.get(`${environment.apiUrl}/items/tornei`).toPromise();
    let tournamentArray = []

    if (kind == 'Calcio') {
      tournamentArray = rawTournament.data.filter((cal: any) => cal.SPORT == 'Calcio a 7')
    }
    else {
      tournamentArray = rawTournament.data.filter((cal: any) => cal.SPORT == 'Acqua Volley')
    }
    tournamentArray.sort((a:any, b:any) => b.GIRONE - a.GIRONE)
    const groups = tournamentArray.map((tour: any) => tour.GIRONE)
    let tournamentsMap = new Map()
    for(const g of groups) {
      tournamentsMap.set(g, tournamentArray.filter((tour:any) => tour.GIRONE == g).sort((a: any, b: any) => b.PUNTEGGIO - a.PUNTEGGIO))
    }
    tournamentsMap = new Map([...tournamentsMap].sort((a, b) => String(a[0]).localeCompare(b[0])))
    console.log(tournamentsMap);
    
    return tournamentsMap
  }

  public async getAllFaqs(): Promise<FAQ[]> {
    const rawFaqs: any = await this.http.get<FAQ[]>(`${environment.apiUrl}/items/faq`).toPromise();
    //const rawFaqs: any = await of(FAQS).toPromise()
    console.log(rawFaqs.data)
    let faqs: FAQ[] = []
    for (const raw of rawFaqs.data) {
      faqs.push({
        id: raw.id,
        question: raw.question,
        answer: marked(raw.answer)
      })
    }

    return faqs

  }

  public async getPageMarkdown(name: string): Promise<string> {
    return this.http.get(`/assets/md/${name}.md`, { responseType: 'text' }).toPromise()
  }
}
