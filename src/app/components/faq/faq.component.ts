import { Component, OnInit } from '@angular/core';
import { FAQ } from 'src/app/models/faq';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from '../modal';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  public searchText = ''
  public clickedFaq = null
  private faqs: FAQ[] = []
  public shownFaqs: FAQ[] = []
  public answer = ''
  constructor(private apiService: ApiService, private modalService : ModalService) {
    apiService.getAllFaqs().then(faqs => {
      this.faqs = faqs
      this.shownFaqs = faqs
    })

  }

  ngOnInit(): void {
  }

  public onSearch(event: any) {
    this.searchText = event
    if (this.searchText.length > 0) {
      this.shownFaqs = this.faqs.filter(faq => faq.question.includes(this.searchText))
    }
    else {
      this.shownFaqs = [...this.faqs]
    }
  }

  openModal(id: string, answer : string) {
    this.answer = answer;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
} 
