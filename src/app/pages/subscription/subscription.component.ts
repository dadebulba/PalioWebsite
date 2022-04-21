import { Component, OnInit } from '@angular/core';
import { marked } from 'marked';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  public rules : string = ""
  constructor(private apiService : ApiService) {

  }

  async ngOnInit(): Promise<void> {
    const rulesMd = await this.apiService.getSubscriptionPage()
    this.rules = marked(rulesMd)
  }

}
